import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Errors from "./Errors";

import AuthContext from "../context/AuthContext";

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  

    if (response.status === 200) {
      const { jwt_token } = await response.json();
      console.log(jwt_token);
      auth.login(jwt_token);
      navigate("/forum");
    } else if (response.status === 403) {
      setErrors(["Login failed."]);
    } else {
        console.log(response);
      setErrors(["Unknown error."]);
    }
  };

    return(
       
        <div>
            <h1>Login</h1>
             {errors.map((error, i) => (
            <Errors key={i} msg={error} />
            ))}
            <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
             <input type="text" className="form-control" id="staticEmail" onChange={(event) => setUsername(event.target.value)} />
             </div>
        </div>
        <div className="mb-3 row">
            <label htmlfor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" onChange={(event) => setPassword(event.target.value)} />
            </div>
        </div>
        <div>
            <button className="btn btn-primary" to='/'>Submit</button>
        </div>
    </form>
        </div>
    );
}