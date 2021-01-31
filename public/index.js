const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Dot env
const dotenv = require('dotenv');
dotenv.config();

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

const authrouter = require('../Routes/auth');
app.use('/Donor',authrouter );

const DonorData = require('../routes/DonorData');
app.use('/',DonorData);

app.listen(3000 || process.env.PORT);