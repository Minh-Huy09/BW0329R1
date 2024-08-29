import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  let [students, setStudents] = useState([]);
  const getList = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      let data = res.data;
      setStudents(data);
    })
  }
  useEffect(() => {
    getList();
  }, []);


  const remove = (id) => {
    let isConfirm = window.confirm("Are you sure?");
    if (isConfirm) {
      axios.delete(`http://localhost:3000/students/${id}`).then((res) => {
        alert("Deleted");
        getList();
      })
    }
  }

  return (
    <>
      <h1>List</h1>
      <table border={1}>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Score</td>
          <td>Action</td>
          <td colSpan={2}>Delete and Update</td>
        </tr>
        {
          students.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.action}</td>
                <td><button onClick={() => { remove(item.id) }}>Delete</button></td>
                <td><Link to={`/products/update/${item.id}`}>Update</Link></td>
              </tr>
            </>
          ))
        }
      </table>
    </>
  );
}

export default List;