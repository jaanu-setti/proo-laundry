
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Signin from "./components/Signin"
import Register from "./components/Register"
import Orderpage from "./components/Create-orderpage"
import Summary from "./components/summary"
import Getorders from "./components/getorderspage"
import Noorder from "./components/no-orderpage"
import Confirm from "./components/confirm"
const App =()=>{
    return(
        <div>
           {/* <Navbar/>  */}
           <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Signin/>}></Route>
                  <Route path= "/register" element={<Register/>}></Route>
                  <Route path="/orderspage" element={<Orderpage/>}></Route>
                  <Route path="/summary" element={<Summary/>}></Route>
                  <Route path="/getorders" element={<Getorders/>}></Route>
                  <Route path="/noorder" element={<Noorder/>}></Route>
                  <Route path="/confirm" element={<Confirm/>}></Route>
               </Routes>
           </BrowserRouter>
           {/* <Footer/> */}
        </div>
    )
}

export default App;