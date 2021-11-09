import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

// import '../css';
import UserRegister from '../component/UserRegister'
import UserLogin from '../component/UserLogin'
import ForgotPassword from "../component/ForgotPassword";
import ResetPassword from "../component/ResetPassword"

function AppRouter() {

  return (
    <div className="App">

<Router>
        <Switch>
          <Route path="/" exact component={UserRegister} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword" exact component={ResetPassword} />
        </Switch>
      </Router>
      {/* <Router>
        <Switch>
          <Route path="/login" component={UserLogin}></Route>
          <Route path="/register" component={UserRegister}></Route>

        </Switch>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </Router> */}

      {/* <UserRegister></UserRegister> */}

      {/* <UserRegister></UserRegister> */}
      {/* <Router>
        
        <Route path="/" component={UserRegister}/>
          {/* <Route path="/login" component={UserLogin} /> */}
      {/* <UserRegister></UserRegister> */}
      {/* </Router> ?*/}
    </div>
  );
}

export default AppRouter;
