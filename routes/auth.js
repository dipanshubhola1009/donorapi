const router = require('express').Router();
const User = require('../modal/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');



//email 

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'dipanshubhola321@gmail.com',
        pass: '@Bhola1009'
    }  ,
     tls:{
        rejectUnauthorized: false
        }
    
});




//registeration
router.post('/register', async (req, res)=>{
    //user already exist
    const exist = await User.findOne({email: req.body.email});
    if(exist){
       return res.status(202).send('user already exist');
    }
    //----------------------

    const mail = {
        from : "dipanshubhola1009@gmail.com",
        to : req.body.email,
        subject:"from blooodonor",
        html: ` 
        <p>
         Dear  ${req.body.name} ,
         <br>Thankyou for registering with Blooodonor.
         <br>Blood is the most precious gift that anyone can give to another person — the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components — red cells, platelets and plasma — which can be used individually for patients with specific conditions
        <br>
        <b>Your Details: </b>
        <ul>
        <li>Blood:  ${req.body.blood}</li>
        <li>Age: ${req.body.age}</li>
        <li>${req.body.city}  - ${req.body.pincode}</li>
        </ul>
         <br>
         <br>
         <p> Sincerely,<br>
          Dipanshu Bhola<br>
         <p> `
    }


    //password to hash
    /*
   const salt = await bcrypt.genSalt(10);
  const hastpassword = await bcrypt.hash(req.body.password, salt);
    */


    const user = new User({
        name: req.body.name,
        email: req.body.email,
      //  password: hastpassword,
        phone: req.body.phone,
        pincode: req.body.pincode,
        city: req.body.city,
        age: req.body.age,
        blood: req.body.blood,
     //   covid: req.body.covid,
      //  available: req.body.available
    });

     try{
         const newUser = await user.save();
         console.log(mail);
         transporter.sendMail(mail, (err,res)=>{
             if(err){
                  console.log(err);
            }
            if(res){
                console.log(res);
            }
            });
            res.send(newUser);
     }  catch(err){
         console.log(err);
         res.status(400).send(err);
     }
});

/*
router.post('/login',async (req,res)=>{
     const user = await User.findOne({email: req.body.email});
     if(!user){
        return res.status(400).send("user not found");
     }
     
     const matched = await bcrypt.compare(req.body.password, user.password);

     if(matched){
         const token = jwt.sign({_id: user._id, name: user.name} ,"123abc123abc");
         res.header('auth-token' , token);
         return res.status(202).send("password is right");
     }
     res.status(400).send("wrong password");
});
*/
module.exports = router;