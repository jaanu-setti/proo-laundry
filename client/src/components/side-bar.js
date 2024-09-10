import "../assets/css/side-bar.css"
import Home from '../assets/images/home.png'
import List from "../assets/images/list.png"
import Plusicon from '../assets/images/plusicon.png'
import { useNavigate } from "react-router-dom"
 const SideBar=()=>{
    const navigate=useNavigate()
    return(
        <>
<div className="side-bar">
<img src={Home} alt="home" className="Home-icon"/>
<span  onClick={()=>{navigate("/create-order")}}><img src={Plusicon} alt="plusicon" onClick={()=>{navigate("/create-order")}} className="more"/></span>
<img src={List} alt="list" className="list"/>
</div>
        </>
    )
}
export default SideBar;
