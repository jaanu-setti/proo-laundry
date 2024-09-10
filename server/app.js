const express = require("express");
const app =express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/Laundry');

// const bodyparser = ("body-parser");
// app.use(bodyparser.json())

const methodoverride=require("method-override");
app.use(methodoverride());
 
const cors = require('cors');
app.use(cors({
    origin : '*'
}))

const user = require("./Routes/User")
app.use('/user',user);

const order = require('./Routes/order')
app.use('/order',order)

app.listen(5000,()=>console.log("app is running at port 5000"));