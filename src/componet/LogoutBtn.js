import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory,Link } from 'react-router-dom';
import AuthContext from '../AuthContext'

function LogoutBtn() {
    const { getLoggedin } = useContext(AuthContext);
    const history = useHistory();

    async function logout() {
        await axios.get("https://safe-courier-app.herokuapp.com/auth/logout")
        await getLoggedin();
        history.push("/");

    }
    return (

        <>

            <li onClick={logout}><Link to="/logout" className="navLink">Logout</Link></li>

        </>
    )
}

export default LogoutBtn
