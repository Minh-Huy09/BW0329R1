import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    let [name, setName] = useState("");
    let [score, setScore] = useState("");
    let [action, setAction] = useState("");
    const params = useParams();
    const idUpdate = params.id;

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

    useEffect(() => {
        axios.get("http://localhost:3000/students/" + idUpdate).then((res) => {
            let data = res.data;
            setName(data.name);
            setScore(data.score);
            setAction(data.action);
        })
    }, [])

    const submit = () => {
        let student = {
            name: name,
            score: score,
            action: action
        }
        console.log(student);
        axios.put(`http://localhost:3000/students/${idUpdate}`, student).then(() => {
            alert("Update Success");
            navigate("/products/list");
        })
    }
    return (
        <>
            <h1>Update</h1>
            <input value={name} placeholder="Name" onChange={(event) => { changeName(event) }} />
            <input value={score} placeholder="Score" onChange={(event) => { changeScore(event) }} />
            <input value={action} placeholder="Action" onChange={(event) => { changeAction(event) }} />
            <button onClick={() => { submit() }}>Submit</button>
        </>
    );
}

export default Update;