import React from "react";
import { useLocation } from "react-router-dom";
import '../assets/css/summary.css'
const Summary = ()=>{
   
    const location = useLocation();
    const { data } = location.state || {}; 
    

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
           
            {/* <table>
              <tbody>
              
               {data.map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td></td>
                    <td>{item.price}</td>
                </tr>
               ))}
              
              </tbody>
            </table> */}
        </div>
    )
}

export default Summary;