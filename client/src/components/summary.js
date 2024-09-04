import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../assets/css/summary.css'
const Address = [
    {type : "Home", address : "#223 , 10th road , JP nagar , Bnaglore"},
    {type : "Other", address : "#223 , 10th road , JP nagar , Bnaglore"}
]
const Summary = ()=>{
   
    const location = useLocation();
    const { data } = location.state || {}; 
    let subtotal = 0;
    let totalcharges = 0;
    let pickupcharge=90;
    const changeprice=(quantity , price)=>{
       let total = (quantity*price)
       subtotal=subtotal + total;
       totalcharges=subtotal + pickupcharge;
     return(total)
     
    }
    const[shownew , setShownew]=useState(false)
    const [newaddress , setNewaddress]=useState('')
    const toggleinput = ()=>{
        setShownew(!shownew)
    }
    const [addresslist , setAddresslist]=useState(Address)
    const newaddresssave=()=>{
        const updatedaddress = [
            ...addresslist,
           {type : "New" , address :newaddress }
        ]
        setAddresslist(updatedaddress);
        setNewaddress('')
        setShownew(false);
        
    }
    return(
        <div className="summarypage">
           <div id="summarycontent">
              <h3>Summary</h3>
           </div> 
          
           <form id="summaryform">
            <div id="locationdiv">
                <select>
                   <option>select location</option>
                   <option>JP nagar</option>
                   <option>Jaya nagar</option>
                   <option>Indira nagar</option>
               </select>
            </div>
            
           <div id="addressdiv">
             <label>Store Address:</label>
                <input type="name"  />
                
            </div>
            <div id="phonediv">
                <label>Phone : </label>
                <input type="number"/>
            </div>
           </form>
           
            <table id="summary-table">
              <tbody>
              <tr><td>Order Details:-</td></tr>
               {data.map((item,index)=>(
                <tr key={index}>
                    <td id="itemname">{item.name}</td>
                    
                    <td id="itemtype">{item.washtype}</td>
                    
                    <td id="itemprice">{item.Quantity} X {item.price} = {changeprice(item.Quantity , item.price)}</td>
                </tr>
               ))}
               <tr id="subtotal">
                <td> Sub Total = {subtotal}</td>
               </tr>
               <tr id="pickup-charges">
                <td>Pickup Charges = 90</td>
               </tr>
               <tr id="total">
                <td id="totalcharge">Total = {totalcharges}</td>
                </tr>
              
              </tbody>
            </table>
            <div className="addressdiv">
                <h3 id="addresstag">Address</h3>
                 <div className="addressmap">
                    {addresslist.map(address=><div key={address.type}>
                        <div className={`address${address.type.toLowerCase()}`}>
                        <h5 id="addresstype">{address.type}</h5>
                        <p id="address-addr">{address.address}</p>
                       
                        </div>
                       
                    </div>)}
                    {shownew?
                    
                    <div>
                       <input id="newinput" type="address" value={newaddress} onChange={(e)=>setNewaddress(e.target.value)}/>
                       <button id="newsave" onClick={newaddresssave}>save</button>
                   </div>
                   :
                   ''}
                   
                 </div>
                 <button id="addnewbutton" onClick={toggleinput}>Add New</button>
            </div>
            <button id="summaryconfirm" >Confirm</button>
            
        </div>
    )
}

export default Summary;