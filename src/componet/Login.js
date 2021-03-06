import axios from 'axios';
import React, { useState, useContext } from 'react'
import AuthContext from '../AuthContext';
import { useHistory } from 'react-router-dom';
import axiosApp from '../axiosConfig';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedin } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const loginData = { email, password };
    // await axios.post("https://safe-courier-app.herokuapp.com/api/v1/auth/login", loginData)
    await axiosApp.post("/api/v1/auth/login ", loginData)

    //load login componet & update state
    await getLoggedin();

    //redirect to home page after login
    history.push("/api/v1/users/orders");

  }
  return (
    <div className="container pt-5">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value); }} value={email} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} value={password} />
        </div>
        <div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login

