// 1. PAGE//

// import './App.css';
// import {Link, Route, Routes} from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from './pages/Home';
// import Product from "./pages/Product";
// import Orders from "./pages/Orders";



// function App() {
//     return (
//         <>
//             <Routes>
//                 <Route path={''} element={<Login/>}></Route>
//                 <Route path={'home'} element={<Home/>}>
//                     <Route path={''} element={<Product/>}/>
//                     <Route path={'orders'} element={<Orders/>}/>
//                 </Route>
//                 <Route path={'register'} element={<Register/>}></Route>

//             </Routes>
//         </>
//     );
// }

// export default App;


// 2. CG_react_router_3

import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./CG_react_router_3/Home";
import Cart from "./CG_react_router_3/Cart";
import DetailProduct from "./CG_react_router_3/DetailProduct";
import Login from "./CG_react_router_3/Login";
import Register from "./CG_react_router_3/Register";
import HomeContent from "./CG_react_router_3/HomeContent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<HomeContent/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detail" element={<DetailProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;







