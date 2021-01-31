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
    User.find({
        blood: req.body.blood
    },
    (err,result)=>{
       if(err){
           res.send(err);
       } 
       if(result){
           res.json(result);
       }
    })
});

module.exports = router;
