const mongoose = require('mongoose');

const SEVA = new mongoose.Schema({
   name:{
       type: String,
       required: true,
   },
   email:{
       type: String,
       required:true
   },
   phone:{
       type: String,
       max:10,
       required:true
   },  
   blood:{
       type: String,
       required: true
   },
   date : {
       type : String,
       required: true
   },
   curdate : {
       type:String,
   }
 
});



module.exports = mongoose.model('User',userSchema);