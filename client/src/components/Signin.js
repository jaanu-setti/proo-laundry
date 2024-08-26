import { Link } from "react-router-dom";
import React,{useState} from "react";
import '../assets/css/signin.css'
import Footer1 from "./footer1";
import { useNavigate } from "react-router-dom";

const Signin = ()=>{
  const Navigate=useNavigate();
    const[data,setData]=useState({
        email : "",
        password : ""
    })
    const handlesignin=(e)=>{
     const{name,value}=e.target
     setData((prevData)=>({
        ...prevData,
        [name]:value

     }))
    }
    const signinoutput = (e)=>{
        e.preventDefault();
      if(data.email==="" || data.password===""){
        alert("all fields are mandatory")
      }else{
       
        const {email , password} = data;
        fetch('http://localhost:5000/user/signin' , 
         {
          method : 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body:JSON.stringify({email , password})
         }
        )
        .then((res)=>res.json())
        .then((data )=> {
          console.log(data)
          if(data.status === "failed") {
            alert(data.message);
          } else {
            console.log(data);
            Navigate("/orderspage");
          }
        })
       
       .catch(err => {
        console.error("Failed to fetch:", err);
      });
      }
     
    }
    return(
      <div>
          <div className="signin-maindiv">
            <div className="signin-div1">
               <div id="signin-para1">Laundry Service</div>
               <div id="signin-para2">Doorstep Wash & Dryclean Service</div>
               <div id="signin-para3" >Don’t Have An Account?</div>
               <Link to='/register'><button id="signin-register">Register</button></Link>
               

            </div>
            <div  className="signin-div2">
                <div id="signin">SIGN IN</div>
                <form action="" method="POST">
                   <div id="signin-mobile"><input placeholder="Mobile / Email" name="email" type="text" onChange={handlesignin}/></div>
                   <div id="signin-password"><input placeholder="Password" name="password" type="password" onChange={handlesignin}/></div>
                   <button id="signin-signin" onClick={signinoutput}>Sign In</button>
                </form>
               
            </div>
        </div>
        <Footer1/>
      </div>
       
    )
}
export default Signin;