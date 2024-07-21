import logo from './logo.svg';
import './App.css';


let xx = 10;
let obj = {
  name: 'NAL',
  age: '20'
}

let arr = [3, 5, 1, 9, 4, 5]
let arrObj = [
  {name: 'IP', price: 300},
  {name: 'IP 10', price: 200},
  {name: 'SS 22', price: 310},
]

// function App() {
//   return (
//     <>
//     <h1>Hello {xx}</h1>
//     <h2>
//         {obj.name}, {obj.age}
//     </h2>
//     {arr.map(e => (
//         <span>{e}, </span>
//     ))}

//      {arr.map(e => {
//       return (
//         <span>{e}, </span>
//       )
//     })}
//     {xx < 12 && <h2>Haha</h2>}
//     </>
//   );
// }



function App() {
  return (
    <>
        {arrObj.map(product => (
          <h2>{product.name}: {product.price}</h2>
        ))}

        <h1>Cac SP co gia = 300</h1>
        {arrObj.map(product => (
          <>
              {product.price >= 300 && <h2>{product.name}: {product.price}</h2>}
          </>
        ))}
    </>
  );
}
export default App; 

// du an React = du an NodeJS:
// 1.file JS, (*)
// 2.package.json: liet ke thu vien (*)
// 3.package-lock.json: liet ke cau hinh (*)
// 4.node_modules: noi luu thu vien

// JSX:
// JS + HTML: viet JS vs HTML de dang hon.
// Thuong xuat hien trong ().
// Hien 1 bien
// Hien 1 doi tuong
// Hien 1 mang
// Hien 1 mang doi tuong