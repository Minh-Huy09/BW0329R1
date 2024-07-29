// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import HienMang from "./component/HienMang";
import TinhToan from "./component/TinhToan";
import Product from "./component/Product";
import TestLifeCycle from "./component/test_life_cycle";
import {FComponent} from "./component/FComponent";
import FProduct from './component/FProduct';
import Covid from './component/Covid';
import Calculator from './component/Calculator';
import TestFuncComponent  from './component/TestFuncComponent';
import Country from './component/Country';

function App() {
  return (
    <>
      {/*<ClassSample />*/}
      {/*<HienMang />*/}
      {/*<TinhToan />*/}
      {/*  <Product />*/}
      {/* <TestLifeCycle/> */}
      {/* <FComponent/> */}
      {/* <Covid/> */}
      {/* <Calculator/> */}
      {/* <TestFuncComponent/> */}
      <Country/>
      {/* <FProduct/> */}
    </>
  );
}

export default App;