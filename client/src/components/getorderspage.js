import React ,{useEffect , useState} from 'react';
import gettable from '../assets/css/gettable.css'
import eye from '../assets/images/eye.jpg'
import Navbar from '../components/Navbar'
import  search  from '../assets/images/search.png';
import { useNavigate} from 'react-router-dom';
import SideBar  from "../components/side-bar"
import { Footer } from './footer';
const Getorders =()=>{
    const [orders , setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/order/getorder')
        .then(res=>res.json())
        .then(data =>{console.log(data)
           setOrders(data.order)})
        
    },[])
  const navigate = useNavigate()
  const handleCreate = ()=>{
   navigate('/orderspage')
  }
    return(
        <div id='get-table-div'>
            <Navbar/>
            <div id='gettable-second-div'>
               
            <SideBar/>
            <div>
            <div id='first-div'>
                <div id='order'>Orders | 0</div>
                <div ><button id='button' onClick={handleCreate}>create</button></div>
                <div id='image-search'>
                    <img src={search} alt='search' width={20} height={20}/>
                    <div id='line'></div>
                    </div>
            </div>
          <table id='gettable'>
            <thead id='head'>
                <tr>
                    
                    <td> <h4>Order Id</h4></td>
                    <td><h4>Order Date&Time</h4></td>
                    <td><h4>Store Location</h4></td>
                    <td><h4>City</h4></td>
                    <td><h4>Store Phone</h4></td>
                    <td><h4>Total Items</h4></td>
                    <td><h4>Price</h4></td>
                    <td><h4>Status</h4></td>
                    <td><h4>View</h4></td>
                 
                </tr>
            </thead>
            <tbody>
               {Array.isArray(orders)&& (orders.length > 0)?
                (orders.map((order)=>(
                   <tr key={order._id}>
                   <td>{order._id}</td>
                   <td>{new Date(order.createdAt).toLocaleString()}</td>
                   <td>{order.location}</td>
                   <td>{order.city}</td>
                   <td>{order.phone}</td>
                   <td>{order.items.length}</td>
                   <td>{order.totalprice}</td>
                   <td>{order.status}</td>
                   <td id='view'><img src={eye} alt='eye image' height={30} width={30}/></td>
               </tr>
                )))
                :
                (
                   <tr><td>orders not available</td></tr>
                )
            }
            </tbody>
          </table>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Getorders;