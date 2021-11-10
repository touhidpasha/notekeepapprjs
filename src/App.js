import React, { useState } from "react";

import './App.css';
import AppRouter from "./router/AppRouter"
import DashBoard from './component/dashBoard/DashBoard'

function App() {

  return (
    <div className="App">
      <AppRouter></AppRouter>
      {/* <DashBoard></DashBoard> */}

{/* <Router>
        <Switch>
          <Route path="/" exact component={UserRegister} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword" exact component={ResetPassword} />
        </Switch>
      </Router> */}
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

export default App;
