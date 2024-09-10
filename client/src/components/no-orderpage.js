import search from '../assets/images/search.png'
import Navbar from './Navbar'
import SideBar from './side-bar'
import { Footer } from './footer'
import '../assets/css/no-order.css'
import { useNavigate } from 'react-router-dom'
export default function Noorder(){
    const navigate = useNavigate()
    const createorder=()=>{
         navigate('/orderspage')
    }
    return(
        <div className='no-div'>
            <Navbar/>
            <div className='no-firstdiv'>
            <SideBar/>
            <div className='no-seconddiv'>
               
            <span className='no-span'>Orders | 0 </span>
            <img className='no-img' src={search} alt='search' width={20} height={20} />
            <span id="no-span2">____________________</span>
          </div>
          <div>
            <span id='no-span3'>No Orders Available</span>
            <button id='no-button' onClick={createorder}>Create Orders</button>
          </div>
            </div>
            <Footer/>
          
        </div>
    )
}