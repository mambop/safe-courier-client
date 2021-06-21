import axios from "axios";
import React, { useState,useContext } from "react";
import { useHistory } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedin } = useContext(AuthContext);
  const history = useHistory();

  async function submitForm(e) {
    e.preventDefault();
    try {
      const loginData = { email, password };

      //make request to server
      await axios.post("https://safe-courier-app.herokuapp.com/auth/login",loginData);
      await getLoggedin();
      history.push("/");
      
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit">Login in</button>
      </form>
    </div>
  );
}

export default Login;
