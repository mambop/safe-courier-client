import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';
import LogoutBtn from './LogoutBtn';

function Navbar() {
    const { loggedin } = useContext(AuthContext);
    return (
        <div>
            <ul>
               
                {loggedin == false &&
                    <>
                        <li><Link to="/signup" className="navLink">Signup</Link></li>
                        <li><Link to="/login" className="navLink">Login</Link></li>
                    </>
                }
                {loggedin == true &&
                    <>
                        <li><Link to="/order" className="navLink">Create Order</Link></li>
                        <LogoutBtn />
                    </>
                }
            </ul>
        </div>
    )
}

export default Navbar
