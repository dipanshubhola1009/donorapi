const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Dot env
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


//Connection to DB
mongoose.connect("mongodb+srv://dbUser:Bhola1009@donordata.nctyi.mongodb.net/Donor?retryWrites=true&w=majority",
    { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
},
    ()=>{
    console.log("Connected to db");
});

app.use(express.json());

//Routes implementation

const authrouter = require('./routes/auth');
app.use('/Donor',authrouter );

const DonorData = require('./routes/DonorData');
app.use('/',DonorData);

app.listen(port, function() {
    console.log("Server started on port 3000");
  });