import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

// check for user loggin when app starts
function AuthContextProvider(props) {  
    const [loggedin, setLoggedin] = useState();

    async function getLoggedin() {
        const loggedinRes = await axios.get("https://safe-courier-app.herokuapp.com/api/v1/auth/loggedin");
        // const loggedinRes = await axios.get("http://locahost:5000/api/v1/auth/loggedin");
    
        setLoggedin(loggedinRes.data);
    }
    // run function when app starts
    useEffect(() => {
        getLoggedin();
    }, []);
    return (
        <AuthContext.Provider value={{ loggedin, getLoggedin }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
export { AuthContextProvider };