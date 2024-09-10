const express = require('express');
const router= express.Router();

const Order = require('../models/order')
router.post('/submitorder' , async(req,res)=>{
 try{
   const {data, location , totalprice } = req.body;
  const newOrder = new Order({
   items: data ,
   location,
   totalprice
  })
  await newOrder.save();
  res.status(201).json({message : "submitted successfully" , order : newOrder});
  
 }
 catch(e){
  res.status(500).json({error : e.message})
 }
})

router.get('/getorder',async(req,res)=>{
  try{
   const getorder= await Order.find();
   res.status(200).json({message : "getting order details" ,order : getorder })
  }
  catch(err){
   res.status(403).json({error : err.message})
  }
})

module.exports=router;