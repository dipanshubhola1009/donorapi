const router = require('express').Router();
const Resource = require('./../modal/ResourceForm')




router.get('',(req,res)=>{
    Resource.find().sort({date : -1}).then( (result, err)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.json(result);
        }
   })
})


router.post("", async (req, res)=>{
    
    const resource = new Resource({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        des: req.body.des,
        category: req.body.category,
        date: new Date()
    });
     console.log(resource);
     try{
         const newUser = await resource.save();
            res.send(newUser);
     }  catch(err){
         console.log(err);
         res.status(400).send(err);
     }
});

module.exports = router;