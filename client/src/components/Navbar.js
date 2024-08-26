import '../assets/css/navbar.css'
const navbar = ()=>{
    return(
        <div className = "navbar"> 
           <p id='laundry'>LAUNDRY</p>
           <p id='home'>Home</p>
           <p id='pricing'>Pricing</p>
           <p id='career'>Career</p>
           <button id='nav-signin'>Signin</button>
        </div>
    );
}

export default navbar;