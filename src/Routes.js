import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import Signup from "./componet/Signup";
import Login from "./componet/Login";
import OrdersList from "./componet/OrdersList";
import OrderForm from "./componet/OrderForm";
import AdminLogin from "./componet/AdminLogin";
import Admin from "./componet/Admin";
import AuthContext from './AuthContext';

function Routes() {

    //disallow manual switcing of routes
    const { loggedin } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/api/v1/"><Home /></Route>
                {loggedin === false &&
                    <>
                        <Route path="/api/v1/auth/signup"><Signup /></Route>
                        <Route path="/api/v1/auth/login"><Login /></Route>
                        <Route path="/api/v1/admin/adminLogin"><AdminLogin /></Route>

                    </>
                }
                {loggedin === true &&
                    <>
                        <Route path="/api/v1/admin/"><Admin /></Route>
                        <Route path="/api/v1/users/orders"><OrdersList /></Route>
                        <Route path="/api/v1/create/"><OrderForm /></Route>
                    </>
                }
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
