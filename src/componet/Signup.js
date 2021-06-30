import React, { useState, useContext } from 'react'
import axios from "axios";
import AuthContext from '../AuthContext';
import { useHistory } from 'react-router-dom';



function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedin } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const signupData = {email, password };
      await axios.post(" https://safe-courier-phillip.netlify.app/api/v1/auth/signup", signupData);


      //load signup componet & update state 
      await getLoggedin()

      //redirect to home page after signup
      history.push("/api/v1/create/");



    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value); }} value={email} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} value={password} />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
