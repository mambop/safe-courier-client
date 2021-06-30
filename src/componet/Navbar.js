import axios from 'axios';
import React, { useContext, useState, useEffect  } from 'react'
import { Link, useHistory,useParams } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Navbar() {

    const { loggedin, getLoggedin } = useContext(AuthContext);

    const history = useHistory();

    //handle user logout
    async function logout() {
        await axios.get("https://safe-courier-app.herokuapp.com/api/v1/auth/logout");
        // await axios.get("http://locahost:5000/api/v1/auth/logout");

        //load home componet & update state 
        await getLoggedin();

        //redirect to home page after login
        history.push("/");
    }

    return (
        <div>
            <ul>
                <li><Link to="/" className="navLink">Home</Link></li>
                {loggedin === false &&
                    <>
                        <li><Link to="/api/v1/auth/signup" className="navLink">Signup</Link></li>
                        <li><Link to="/api/v1/auth/login" className="navLink">User Login</Link></li>
                        <li><Link to="/api/v1/adminLogin/" className="navLink">Admin Login</Link></li>
                    </>

                }
                {loggedin === true &&
                    <>
                      <li><Link to={"/api/v1/users/orders"} className="navLink">Orders</Link></li>
                        <li><Link to="/api/v1/create/" className="navLink">Create</Link></li>
                        <li><Link to="/api/v1/adminLogin/admin/" className="navLink">Admin</Link></li>
                        <li><Link to="/api/v1//auth/logout" className="navLink" onClick={logout}>Logout</Link></li>
                        
                    </>
                }


            </ul>
        </div>
    )
}

export default Navbar
