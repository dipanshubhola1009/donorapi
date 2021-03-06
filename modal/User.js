const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name:{
       type: String,
       required: true,
   },
   email:{
       type: String,
       required:true
   },
   city: {
       type: String,
       required:true
   },
   pincode:{
       type: String,
       required: true
   },
   phone:{
       type: String,
       max:10,
       required:true
   },
   age:{
       type: String,
       require: true
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