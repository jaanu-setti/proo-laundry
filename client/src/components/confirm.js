import tickmark from '../assets/images/tickmark.jpg'
import '../assets/css/confirm.css'
import Navbar from './Navbar'
import SideBar from './side-bar'
import { Footer } from './footer'
import { useNavigate } from 'react-router-dom'
export default function Confirm(){
    const navigate = useNavigate()
    const getorderspage=()=>{
     navigate('/getorders')
    }
    return(
        <div>
            <Navbar/>
              <div id='confirm-sidebar'>
                <SideBar/>
                <div id="confirm-first-div">
             <img id='confirm-img' src={tickmark} alt='tick' height={200} width={200}/>
             <div>
                <h4 id='h4'>Your Order Is Successfull</h4>
                <span id='confirm-span'>you can track the order details in "Orders" section</span>
                <button id='confirm-button' onClick={getorderspage}>Go To Orders</button>
             </div>
             </div>
              </div>
             <Footer/> 
        </div>
       
    )
}