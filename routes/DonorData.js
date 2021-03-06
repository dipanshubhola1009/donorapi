const router = require('express').Router();
const tokenVerify = require('../Extra/tokenVerify');
const User = require('../modal/User');


router.get('',(req,res)=>{
     User.find().sort({date : -1}).then( (result,err)=>{
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

    User.find(req.body,
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
