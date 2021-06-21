import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Signup from "./componet/Signup";
import Login from "./componet/Login";
import Parcel from "./componet/Parcel";

import AuthContext from "./AuthContext";

function Routers() {
  const { loggedin } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
  
        {
          loggedin === false &&
          <>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        }
        {
          loggedin === true &&
          <>
            <Route path="/order">
              <Parcel/>
            </Route>

          </>
        }

      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
