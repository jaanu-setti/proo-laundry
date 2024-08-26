import React from "react";
import { useLocation } from "react-router-dom";
const Summary = ()=>{
   
    const location = useLocation();
    const { data } = location.state || {}; 
    

    return(
        <div >
            
            <span>hello everyine</span>
            <table>
              <tbody>
              
               {data.map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td></td>
                    <td>{item.price}</td>
                </tr>
               ))}
              
              </tbody>
            </table>
        </div>
    )
}

export default Summary;