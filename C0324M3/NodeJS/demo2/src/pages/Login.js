
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [usn, setUsn] = useState("");
    let [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    let getDataUsn = (event) => {
        setUsn(event.target.value);
    }

    let getDataPwd = (event) => {
        setPwd(event.target.value);
    }

    let submit = () => {
        if(usn === "admin" && pwd === "admin") {
            let dataSender = {
                usn: "Ning",
                id: 30033
            }
            navigate("/home", {state: dataSender});
        } else {
            alert("Use or Pwd is wrong");
        }
    }
    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={usn} name="usn" onChange={(event) => {getDataUsn(event)}}></input>
            <input type="text" placeholder="Password" value={pwd} name="pwd" onChange={(event) => {getDataPwd(event)}}></input>
            <button onClick={submit}>Submit</button>
        </>
    );
}

export default Login;
