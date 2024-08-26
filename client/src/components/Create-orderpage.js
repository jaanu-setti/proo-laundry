import React , {useState,useEffect } from "react";
import bleach from "../assets/images/bleach.jpg";
import washingmachine from "../assets/images/washing-machine.jpg";
import ironing from "../assets/images/ironing.jpg";
import towel from "../assets/images/towel.jpg";
import shirts from "../assets/images/shirts.jpg";
import tshirts from "../assets/images/tshirts.jpg";
import trousers from "../assets/images/trousers.jpg";
import jeans from "../assets/images/jeans.jpg";
import joggers from "../assets/images/joggers.jpg";
import boxer from "../assets/images/boxer.avif"
import others from "../assets/images/others.jpg"
import "../assets/css/createorder.css"
import Summary from "./summary";
import { useNavigate } from "react-router-dom";

const tablelist=[
    {id : 1 ,imgurl:shirts, name : "Shirts" , description : "Lorem ipsum is simply dummy text of the",  Quantity:'', price:20},
    {id : 2 ,imgurl:tshirts, name : "T Shirts" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:30},
    {id : 3 ,imgurl:trousers, name : "Trousers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:40},
    {id : 4 ,imgurl:jeans, name : "Jeans" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:100},
    {id : 5 ,imgurl:boxer, name : "Boxers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:60},
    {id : 6 ,imgurl:joggers, name : "Joggers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:80},
    {id : 7 ,imgurl:others, name : "Others" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', price:50}
]
export default function Orderpage(){
     const[products,setProducts]=useState(tablelist);
    const changequantity=(id , e)=>{
       let newquantity=e.target.value;
       setProducts(
        products.map(product=>product.id===id?{...product , Quantity:(newquantity) } : product)
       )
    }
    const[icon , setIcon]=useState({});
    const toggleicon = (id , type) =>{
      setIcon(prevState=>({
        ...prevState,
        [id]:{
            ...(prevState[id] ||{}),
            [type]:!prevState[id]?.[type]
        }
      }))
      console.log(icon)
    }
    const Pricechange = (quantity , price)=>{
      return (quantity * price)
    }
    const resetbutton = (id)=>{
        setProducts(
            products.map(product=>product.id===id?{...product , Quantity:(0) } : product)
           )
    }

    const [selectedrow , setSelectedrow]=useState([]);
    const [submit , setSubmit] = useState(false);
    const Navigate=useNavigate();
    const proceedbutton=()=>{
        const newlist = products.filter(item=>item.Quantity>0)
        console.log(newlist)
        setSelectedrow(newlist)   
        setSubmit(true); 
        const data = selectedrow;
        Navigate('/summary' , { state: { data } })
        

    }
    useEffect(() => {
        if (submit) {
            console.log('Selected row after update:', selectedrow);
        }
    }, [submit, selectedrow]);

    return(
        <div id="main-table-div">
           <table id="table">
            <thead> 
                <tr id="main-row">
                <th id="product-type">Product Types</th>
                <th id="quantity">Quantity</th>
                <th id="washtype">Wash Type</th>
                <th id="price">Price</th>
                </tr>
                
            </thead>
            <tbody>
                {products.map(item=>(
                    <tr id="rows" key={item.id}>
                        <td>
                           <img src={item.imgurl}  alt="clothes" width={50} height={50}/>
                            <span style={{fontWeight:"bold" }} id="name">{item.name}</span>
                            <p>{item.description}</p>
                        </td>
                        <td>
                            <input type="number" id="quantity-input" name="quantity" value={item.Quantity}  onChange={ (e)=>changequantity(item.id , e)}/>
                          
                        </td>
                        <td>
                            <img id="washing-img" src={washingmachine} alt="washing-machine" onClick={()=>toggleicon(item.id ,'washing') } /> 
                            <img id="iron-img" src={ironing} alt="ironing"/> 
                            <img id="towel-img" src={towel} alt="towel"/> 
                            <img id="bleach-img" src={bleach} alt="bleach"/> 
                        </td>
                        <td>
                           {item.Quantity>0?(
                             <div className="pricechange">
                               {item.Quantity} X {item.price} = {Pricechange(item.Quantity , item.price)}
                               <button id="reset" onClick={()=>resetbutton(item.id)}>Reset</button>
                             </div>
                           ):('----')}
                        </td>
                    </tr>
                    
                ))}
            </tbody>
           </table>
           
           <button id="cancel">Cancel</button>
           <button id="proceed" onClick={proceedbutton}>Proceed</button>
           
           {selectedrow.length > 0 ?<Summary data={selectedrow}/>:<div></div>}
           
        </div>
    )
}