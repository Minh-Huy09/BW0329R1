
import { Link } from "react-router-dom";

function Register() {
    return (
     <>
     <h1>Register</h1>
     <input type="text" placeholder="Username"></input>
     <input type="text" placeholder="Password"></input>
     <Link to="/">Login now?</Link>
     <button>Register</button>
     </>
    );
  }
  
  export default Register;
