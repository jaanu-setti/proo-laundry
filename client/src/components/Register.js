import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import '../assets/css/register.css'
 import Footer1 from "./footer1";
//import { Navigate } from 'react-router-dom';
const Register = () => {
  const Navigate = useNavigate();
 
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    pincode: "",
    address: "",
    password: "",
    confirmpassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };
  const [districts, setDistricts] = useState([]);
  const Statedistricts = {
    "Andhra pradesh": [ "Ananthapur", "Guntur", "East Godavari", "west Godavari" ],
    Kerala: ["Malappuram", "Thiruvunanthapuram", "Kollam", "Wayand"],
    Punjab: ["Amritsar", "Barnala", "Firozpur", "Gurdaspur"],
    Rajasthan: ["Ajmer", "Alwar", "Barmer", "Bilawara"],
  };

  const statechange = (event) => {
    const state = event.target.value;
   setForm((prevForm)=>({
    ...prevForm,
    state : state,
    district:""
   }))
    setDistricts(Statedistricts[state] || []);
  };

  const inputvalidation = () => {
    const { email, phone, password, confirmpassword } = form;
    const newerrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newerrors.email = "Invalid email";
    } 
     if (!/^\d{10}$/.test(phone)) {
      newerrors.phone = "phone number should be 10 digits";
    } 
    if (password.length < 8) {
      newerrors.password = "password length should be greater than 8 digits";
    }
    if (password !== confirmpassword) {
      newerrors.confirmpassword =
        "password and confirm password should be same";
    }
    setErrors(newerrors);
    return Object.keys(newerrors).length === 0;
  };

  const registerhandler = (e) => {
    e.preventDefault();
    // console.log('Form values : ' ,form)
    if (
      form.username.trim() === "" ||
      form.phone.trim() === "" ||
      form.address.trim() === "" ||
      form.email.trim() === "" ||
      form.state.trim() === "" ||
      form.district.trim() === "" ||
      form.password.trim() === "" ||
      form.confirmpassword.trim() === "" ||
      form.pincode.trim() === ""
    ) {
      alert("All fields are mandatory");
    } else {
      try{
        inputvalidation();
        console.log(form)
        const {username , email, phone ,  state , district ,address  , pincode ,  password , confirmpassword}=form;
        fetch('http://localhost:5000/user' , {
        method : 'POST',
        headers : {
        'content-type' : 'application/json'
        },
         body : JSON.stringify({username ,  email , phone , address , state , district , pincode , password , confirmpassword })
        })
        .then(response => {
          if (!response.ok) {
              return response.text().then(text => {
                  throw new Error(`Network response was not ok: ${text}`);
              });
          }
          return response.json();
      })
        .then(data=>console.log(data))
      
      }
      catch(e){
        console.log(e)
      }
      // console.log("Registration successfull");
      Navigate("/");
    }
  };

  return (
    <div>
      <div className="register-maindiv">
      <div className="reg-div1">
        <div id="reg-para1">Laundry Service</div>
        <div id="reg-para2">Doorstep Wash & Dryclean Service</div>
        <div id="reg-para3">Already Have Account?</div>
        <Link to="/">
          <button id="reg-signin">Signin</button>
        </Link>
      </div>
     
        <div className="reg-div2">
          <div className="register">REGISTER</div>
          <form method="POST" onSubmit={registerhandler}>
          <div className="reg-name">
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={handlechange}
            />
          </div>
          <div className="reg-line1"></div>
          <div className="reg-email">
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handlechange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="reg-line2"></div>
          <div className="reg-phone">
            <input
              placeholder="Phone"
              type="number"
              name="phone"
              onChange={handlechange}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
          <div className="reg-line3"></div>
          <div>
              {/* <label for="options">Choose an option:</label> */}
          <select id="reg-state" name="state" onChange={statechange}>
            <option value="">select a state</option>
            {Object.keys(Statedistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          </div>
         
          <div
            className="reg-line4"
          ></div>
          <div>
          {/* <label for="options">Choose an option:</label> */}
          <select id="reg-district"  name="district" onChange={handlechange}>
            <option value="">select a district</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          </div>
          <div className="reg-line5"></div>
          <div className="reg-address">
            <input
              placeholder="Address"
              name="address"
              type="text"
              onChange={handlechange}
            />
          </div>
          <div className="reg-line6"></div>
          <div className="reg-pincode">
            <input
              placeholder="Pincode"
              name="pincode"
              type="text"
              onChange={handlechange}
            />
          </div>
          <div className="reg-line7"></div>
          <div className="reg-password">
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={handlechange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="reg-line8"></div>
          <div className="reg-confirm">
            <input
              placeholder="Confirm Password"
              name="confirmpassword"
              type="password"
              onChange={handlechange}
            />
            {errors.confirmpassword && (
              <p style={{ color: "red" }}>{errors.confirmpassword}</p>
            )}
          </div>
          <div className="reg-line9"></div>
          <div className="reg-box"></div>
          <div className="reg-terms">
            I agree to Terms & Condition receiving marketing and promotional
            materials
          </div>
          <button className="reg-button" type="submit">Register</button>
          </form>
        </div>
  
    </div>
   <Footer1/>
    </div>    
  );
};
export default Register;
