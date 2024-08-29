import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create() {
    let [name, setName] = useState("");
    let [score, setScore] = useState("");
    let [action, setAction] = useState("");
    const navigate = useNavigate();
    const changeName = (event) => {
        let dataInput = event.target.value;
        setName(dataInput);
    }
    const changeScore = (event) => {
        let dataInput = event.target.value;
        setScore(dataInput);
    }
    const changeAction = (event) => {
        let dataInput = event.target.value;
        setAction(dataInput);
    }

    const submit = () => {
        let student = {
            name: name,
            score: score,
            action: action
        }
        console.log(student);
        axios.post("http://localhost:3000/students", student).then(() => {
            alert("Thêm thành công");
            navigate("/products/list");
        })
    }
    return (
        <>
            <h1>Create</h1>
            <input value={name} placeholder="Name" onChange={(event) => { changeName(event) }} />
            <input value={score} placeholder="Score" onChange={(event) => { changeScore(event) }} />
            <input value={action} placeholder="Action" onChange={(event) => { changeAction(event) }} />
            <button onClick={() => { submit() }}>Submit</button>
        </>
    );
}

export default Create;