import {useState} from "react";

export function FComponent(){
    let [a, setA] = useState(parseFloat(''));
    let [b, setB] = useState(parseFloat(''));
    let [add, setAdd] = useState('');
    let [sub, setSub] = useState('');
    let [mul, setMul] = useState('');
    let [div, setDiv] = useState('');
    return(
        <>
            <input onChange={(e =>{
                setA(parseFloat(e.target.value))
            })}/>
            <input onChange={(e =>{
                setB(parseFloat(e.target.value))
            })}/>
            <button onClick={() => setAdd((a+b))}>Cộng</button>
            <button onClick={() => setSub((a-b))}>Trừ</button>
            <button onClick={() => setMul((a*b))}>Nhân</button>
            <button onClick={() => setDiv(b===0 ? "Mẫu s khác phải 0": (a/b))}>Chia</button>
            <h5>{add}</h5>
            <h5>{sub}</h5>
            <h5>{mul}</h5>
            <h5>{div}</h5>
        </>
    )
}