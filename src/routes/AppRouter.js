/* ************************************************************************
 * Purpose          :router for navigation           
 * 
 * @file            : AppROuter.js
 * @author          : Touhid pasha
 * @version         : 1.0
 * @since           : 9-8-2021
 * 
 **************************************************************************/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import UserRegister from  '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword"
import DashBoard from "../pages/DashBoard"
import Header from "../component/dashBoard/Header"

function AppRouter() {
  return (
    <div className="App">

<Router>
        <Switch>
          <Route path="/" exact component={UserRegister} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword" exact component={ResetPassword} />
          <Route path="/dashBoard" exact component={DashBoard} />
          <Route path="/header" exact component={Header} />

        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
