import React from "react";
import { useLocation } from "react-router-dom";
import '../assets/css/summary.css'
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
              <tr>Order Details:-</tr>
               {data.map((item,index)=>(
                <tr key={index}>
                    <td id="itemname">{item.name}</td>
                    
                    <td id="itemtype">{item.washtype}</td>
                    
                    <td id="itemprice">{item.Quantity} X {item.price} = {changeprice(item.Quantity , item.price)}</td>
                </tr>
               ))}
               <tr id="subtotal">
               Sub Total = {subtotal}
               </tr>
               <tr id="pickup-charges">
                Pickup Charges = 90
               </tr>
               <tr id="total">
                <td id="totalcharge">Total = {totalcharges}</td>
                </tr>
              
              </tbody>
            </table>
            
        </div>
    )
}

export default Summary;