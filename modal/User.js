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
  /* password:{
       type: String,
       required:true
   },
   
   covid:{
       type:Boolean,
       default:false
   },
     available:{
       type:Boolean,
       default:true
   },
   */
   age:{
       type: String,
       require: true
   },
   
   blood:{
       type: String,
       required: true
   },
 
});



module.exports = mongoose.model('User',userSchema);