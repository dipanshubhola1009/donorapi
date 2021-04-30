const mongoose = require('mongoose');

const ResourceForm = new mongoose.Schema({
   name:{
       type: String,
       required: true,
   },
   email:{
       type: String,
   },
   city:{
       type: String,
       required: true
   },
   category :{
       type: String,
       required: true
   },
   phone:{
       type: String,
       max:10,
       required:true
   },
   date : {
       type : String,
       required: true
   },
   des : {
       type: String,
       required: true
   }
 
});



module.exports = mongoose.model('Resource',ResourceForm);