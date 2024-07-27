// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import HienMang from "./component/HienMang";
import TinhToan from "./component/TinhToan";
import Product from "./component/Product";
import TestLifeCycle from "./component/test_life_cycle";
import {FComponent} from "./component/FComponent";
import FProduct from './component/FProduct';

function App() {
  return (
    <>
      {/*<ClassSample />*/}
      {/*<HienMang />*/}
      {/*<TinhToan />*/}
      {/*  <Product />*/}
      {/* <TestLifeCycle/> */}
      {/* <FComponent/> */}
      <FProduct/>
    </>
  );
}

export default App;