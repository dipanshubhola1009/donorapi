const router = require('express').Router();
const tokenVerify = require('./tokenVerify');
const User = require('../modal/User');


router.get('',(req,res)=>{
     User.find({}, (err, result)=>{
         if(err){
             console.log(err)
         }
         if(result){
             res.json(result);
         }
    })
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const query = {
        blood : req.body.blood ? req.body.blood : "",
        pincode: req.body.pincode.length > 1 ? req.body.pincode : null,
    }
    console.log(query)
    User.find(query,
    (err,result)=>{
       if(err){
           res.status(401);
           res.send(err);
       } 
       if(result){
           res.status(200);
           res.json(result);
       }
    })
});

module.exports = router;
