const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    items :[
        {
            productname : {type : String},
            quantity : {type : String},
            washtype : {type : Array},
            price : {type : Number}
        }
    ],
    location : {type : String },
    city : {type: String , default : "Banglore"},
    phone : {type : Number , default : 9999999999},
    status : {type : String , default : "Ready to Pickup"},
    totalprice : {type : Number},
    createdAt : {type :Date , default:Date.now}
   
})
const order = mongoose.model('Order' , orderSchema);
module.exports=order;