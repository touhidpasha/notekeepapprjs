import React, { useState } from "react";
import { Button, TextField, Checkbox, Typography } from "@mui/material";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";


import '../css/UserRegister.css'
import logo from "../assets/download.jpeg"
import UserLogin from "../component/UserLogin"


export default function UserRegister(props) {

    const [fValue, changeFormValues] = useState({

        // "firstName": "",
        // "lastName":"",
        // "emailId":"",
        // "password":""

    });

    // const [register,changePage]=useState(true);


    const getFormValues = (event) => {
        console.log("inside getform");
        changeFormValues({
            // event.target.name:event.target.lastName;
            // ...fValue,
            "firstName": event.target.firstName,
            "lastName": event.target.lastName,
            "emailId": event.target.emailId,
            "password": event.target.password

        })
        console.log(fValue);

    }

    return (
        <div id="form" >
            <div id="col">
                {/* <img src={{require("../assets/download.jpeg")}} alt="wait still loading.."></img> */}
                <img src={logo} alt="wait still loading.."></img>
            </div>
            <div id="col">
                <div id="row" >
                    <Typography fontSize="30px">
                        <span id="F"> F</span>
                        <span id="U">U</span>
                        <span id="N">N</span>
                        <span id="D">D</span>
                        <span id="O">O</span>
                        <span id="N">N</span>
                        <span id="OO">O</span>
                        <span id="T">T</span>
                        <span id="E">E</span>
                        <span id="S">S</span> Create new account</Typography>
                    <br></br>

                </div>
                <form onSubmit={getFormValues}>
                    <div id="row">
                        <TextField className="textField" sx={{ paddingRight: 2 }} placeholder="First name" label="First name" name="firstName" value={fValue.firstName}></TextField>

                        <TextField className="textField" placeholder="Last name" label="Last name" name="lastName" value={fValue.lastName}></TextField>
                    </div>
                    <div id="row" >
                        <TextField className="textField" sx={{ width: 480 }} placeholder="Username" label="emailId" name="emailId" value={fValue.emailId}></TextField>
                    </div>
                    <div id="row">
                        <TextField className="textField" type="password" sx={{ paddingRight: 2 }} placeholder="Password" label="password" name="password" value={fValue.password}></TextField>
                        <TextField className="textField" type="password" placeholder="Confirm" label="confirm"></TextField>
                    </div>
                    <div id="row">
                        <Typography sx={{ paddingTop: -2 }} fontSize="12px" fontWeight="0.5px" className="hint">password must contain atleat 8 and with combination of all chars</Typography>
                    </div>
                    <div id="row">
                        <Checkbox sx={{ marginRight: 1 }} ></Checkbox>
                        <Typography sx={{ paddingTop: 1.5 }} id="checkBox">Show password</Typography>
                    </div>
                    <div id="row-button">
                        <Router>
                            <Link to="/UserLogin">
                                <Button variant="contained" color="primary">Login instead</Button>
                            </Link>

                            <Switch>
                                <Route path="/UserLogin"><UserLogin></UserLogin></Route>
                            </Switch>
                        </Router>
                        <Button type="submit" variant="contained" color="primary"  >Create Account</Button>
                    </div>
                </form>
            </div>

        </div >
    )


}