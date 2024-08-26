const express = require("express");
const router=express.Router();

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require("../models/User")

router.get("/", async(req,res)=>{
    const userdetails = await user.find();
    res.status(201).json(userdetails)
    
})

router.post('/signin', async(req,res)=>{
  const {email , password} = req.body;
  const validuser=await user.findOne({email : email})
  console.log(validuser , "errors from 17")
  if(!validuser){
    res.status(401).json({status : "failed" , message : "incorrect email"})
  } 

  if (!validuser) {
    return res.status(500).json({ status: "failed", message: "User password is not set in the database" });
}

  const passwordmatch = await bcrypt.compare(password , validuser.password);
  if(!passwordmatch){
   return res.status(403).json({status : "failed" , message : "incorrect password"}) 
  }
   const token = jwt.sign({userid : validuser._id , username:validuser.username} , 'secret_key' , {expiresIn : '1hr'})
   res.json({token})
})

router.post('/',async(req,res)=>{
  const {username , email , phone , state , district , address , pincode , password , confirmpassword} = req.body;
  try{
    const hashedpassword = await bcrypt.hash(password , 10);
    const newuser = await user.create({
        username,
        email,
        phone,
        state,
        district,
        address,
        pincode,
        password : hashedpassword,
        confirmpassword : hashedpassword
      })
     
      res.status(200).json({status : "success", message : "user registered successfully"})
  }
  catch(e){
    console.log(e)
    res.status(500).json({message : e.message})
  }
})
module.exports = router;