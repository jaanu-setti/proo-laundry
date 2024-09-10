import React , {useState } from "react";
import Navbar from "./Navbar";
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
import { useNavigate } from "react-router-dom";
import washingmachine2 from "../assets/images/washing-machine (2).svg"
import ironing2 from "../assets/images/ironing (1).svg"
import bleach2 from "../assets/images/bleach (1).svg"
import SideBar from "./side-bar";

const tablelist=[
    {id : 1 ,imgurl:shirts, name : "Shirts" , description : "Lorem ipsum is simply dummy text of the",  Quantity:'', washtype:[], price:20, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 2 ,imgurl:tshirts, name : "T Shirts" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:30, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 3 ,imgurl:trousers, name : "Trousers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:40, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 4 ,imgurl:jeans, name : "Jeans" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:100, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 5 ,imgurl:boxer, name : "Boxers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:60, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 6 ,imgurl:joggers, name : "Joggers" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:80, iswashingToggled : false , isironingToggled : false, isbleachToggled:false},
    {id : 7 ,imgurl:others, name : "Others" , description : "Lorem ipsum is simply dummy text of the", Quantity:'', washtype:[], price:50, iswashingToggled : false , isironingToggled : false, isbleachToggled:false}
]
export default function Orderpage(){
     const[products,setProducts]=useState(tablelist);
    const changequantity=(id , e)=>{
       let newquantity=e.target.value;
       setProducts(
        products.map(product=>product.id===id?{...product , Quantity:(newquantity) } : product)
       )
    }
    
    const Pricechange = (quantity , price)=>{
      return (quantity * price)
    }
    const resetbutton = (id)=>{
        setProducts(
            products.map(product=>product.id===id?{...product , Quantity:(0) } : product)
           )
    }
   
    const toggleimage=(id , type)=>{
       setProducts(products.map(product=>{
        if(product.id===id){
             let updatedwashtype = [...product.washtype]
             if(updatedwashtype.includes(type)){
                updatedwashtype= updatedwashtype.filter(wash => wash !== type);
             }
             else{
                updatedwashtype.push(type);
             }
             return{
                ...product,
                washtype : updatedwashtype ,
                iswashingToggled : type==="  washing" ? !product.iswashingToggled:product.iswashingToggled,
                isironingToggled : type === "  ironing" ? !product.isironingToggled:product.isironingToggled,
                isbleachToggled : type=== "  bleach" ? !product.isbleachToggled : product.isbleachToggled
             }
        }
        return product; 
       }
      
       ))

    }
    const[selectedproducts , setSelectedproducts]=useState([])
   
    const Navigate=useNavigate();
    const proceedbutton=()=>{
        const newlist = products.filter(item=>item.Quantity>0)
        setSelectedproducts(newlist)
        Navigate(selectedproducts.length>0?'/summary':alert('select atleast one product '), { state: { data : newlist } })

    }
    

    return(
        <div>

        <Navbar/>
        <div id="second-div">
        <SideBar/>
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
                            <img id="washing-img" src={item.washtype.includes("  washing")?washingmachine2:washingmachine} alt="washing-machine" onClick={()=>toggleimage(item.id , "  washing") } /> 
                            <img id="iron-img" src={item.washtype.includes("  ironing")?ironing2:ironing} alt="ironing" onClick={()=>toggleimage(item.id, "  ironing") }/> 
                            <img id="towel-img" src={towel} alt="towel"/> 
                            <img id="bleach-img" src={item.washtype.includes("  bleach")?bleach2:bleach} alt="bleach" onClick={()=>toggleimage(item.id, "  bleach") }/> 
                            
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
           
           
           
        </div>
 
        </div>
               </div>
    )
}