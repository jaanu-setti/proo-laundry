
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import Register from "./components/Register"
import { Footer } from "./components/footer"
import Orderpage from "./components/Create-orderpage"
import Summary from "./components/summary"
const App =()=>{
    return(
        <div>
           <Navbar/> 
           <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Signin/>}></Route>
                  <Route path= "/register" element={<Register/>}></Route>
                  <Route path="/orderspage" element={<Orderpage/>}></Route>
                  <Route path="/summary" element={<Summary/>}></Route>
               </Routes>
           </BrowserRouter>
           {/* <Footer/> */}
        </div>
    )
}

export default App;