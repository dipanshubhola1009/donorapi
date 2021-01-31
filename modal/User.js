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
   password:{
       type: String,
       required:true
   },
   age:{
       type: Number,
       require: true
   },
   sex:{
       type:String,
       required: true
   },
   blood:{
       type: String,
       required: true
   }
});



module.exports = mongoose.model('User',userSchema);