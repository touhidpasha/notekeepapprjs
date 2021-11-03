import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{useState} from "react";

// import logo from './logo.svg';
import './App.css';
import UserRegister from './component/UserRegister'
import UserLogin from './component/UserLogin'
// import Users from './contoller/Users'
function App() {
  // console.log("after render in user")

  // const [component,changeComponent]=useState(UserRegister)

  return (
    <div className="App">
      <UserRegister></UserRegister>
      {/* <Router>
        
        <Route path="/" component={UserRegister}/>
          {/* <Route path="/login" component={UserLogin} /> */}
        {/* <UserRegister></UserRegister> */}
      {/* </Router> ?*/} 
    </div>
  );
}

export default App;
