const router = require('express').Router();
const User = require('../modal/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//registeration
router.post('/register', async (req, res)=>{
    //user already exist
    const exist = await User.findOne({email: req.body.email});
    if(exist){
        res.status(202).send('user already exist');
    }
    //----------------------


    //password to hash
    const salt = await bcrypt.genSalt(10);
    const hastpassword = await bcrypt.hash(req.body.password, salt);
    //------------------------


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hastpassword,
        age: req.body.age,
        sex: req.body.sex,
        blood: req.body.blood
    });

     try{
         const newUser = await user.save();
         res.send(newUser);
     }  catch(err){
         console.log(err);
         res.status(400).send(err);
     }
});


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

module.exports = router;