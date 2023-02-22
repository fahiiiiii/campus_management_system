

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/campus_management_system");

const express = require("express");
const app = express();
// const url ="mongodb+srv://Fahimah:FahimahPASScluster0.sc0ehr8.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(url).then(()=>{
//     console.log("MongoDB connected");
// })
// .catch((err)=>console.log(err));
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

app.listen(3000,()=>{
    console.log("Server is runnning...");
});