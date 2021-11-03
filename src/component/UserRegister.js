import React, { useState } from "react";
import { Button, TextField, Checkbox, Typography } from "@mui/material";
// import axios from 'axios'
// import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import '../css/UserRegister.css'
import logo from "../assets/download.jpeg"
import UserLogin from "../component/UserLogin"
import { NAME_PATTERN1, EMAIL_PATTERN1, PASSWORD_PATTERN1 } from '../utils/regex-patterns'

const  UserHelper = require('../contoller/UserHelper')


export default function UserRegister(props) {
    
    const [fValue, changeFormValues] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": ""
    });

    // const [validInput, checkValidationFlag] = {
    //     "firstName": true,
    //     "lastName": true,
    //     "email": true,
    //     "password": true
    // }

    // const [wrongInput, wrongInputChanger] = useState(false)

    const [showRegister, changePage] = useState(true);
    const [showPassword, changeShowPassword] = useState("password")
    const [errorMsg, setErrorMessage] = useState("")

    const getFormValues = (event) => {
        // console.log("inside getform");

        setErrorMessage("")
        changeFormValues({
            ...fValue,
            [event.target.name]: event.target.value
        })

        let flag = true;

        switch (event.target.name) {
            case "firstName":
                flag = NAME_PATTERN1.test([event.target.value]);
                break;
            case "lastName":
                flag = NAME_PATTERN1.test([event.target.value]);
                break;
            case "email":
                flag = EMAIL_PATTERN1.test([event.target.value]);
                break;
            case "password":
                flag = PASSWORD_PATTERN1.test([event.target.value]);
                break;

        }

        if (!flag) {

            setErrorMessage("please enter valid " + event.target.name)
            // changeFormValues({
            //     ...validInput,
            //     [event.target.name]: false
            // })
            // validInput.map((value) => { return (value.value === false ? value.key + " is not valid" : true) })
        }
    }
    const createUser = (event) => {
        console.log("create user called in userRegister");
        // if (fValue.firstName !== "" || fValue.lastName !== "" || fValue.email !== "" || fValue.password !== "")
            UserHelper.createUser(fValue)
        // else
            // console.log("fill all the fields");

    }






    if (showRegister)
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
                            <span id="S">S</span> <br></br>Create new account</Typography>
                        <br></br>
                    </div>
                    <form  >
                        <div id="row">
                            <TextField className="textField" sx={{ paddingRight: 2 }} placeholder="First name" label="First name" name="firstName" value={fValue.firstName} onChange={getFormValues}></TextField>

                            <TextField className="textField" placeholder="Last name" label="Last name" name="lastName" value={fValue.lastName} onChange={getFormValues}></TextField>
                        </div>
                        <div id="row" >
                            <TextField className="textField" sx={{ width: 480 }} placeholder="Username" label="email" name="email" value={fValue.email} onChange={getFormValues}></TextField>
                        </div>
                        <div id="row">
                            <TextField className="textField" type={showPassword} sx={{ paddingRight: 2 }} placeholder="Password" label="password" name="password" value={fValue.password} onChange={getFormValues}></TextField>
                            <TextField className="textField" type={showPassword} placeholder="Confirm" label="confirm"></TextField>
                        </div>
                        <div id="row">
                            <Typography sx={{ paddingTop: -2 }} fontSize="12px" fontWeight="0.5px" className="hint">password must contain atleat 8 chars with combination of all chars</Typography>
                        </div>
                        <div id="row">
                            <Checkbox sx={{ marginRight: 1 }} onChange={(e) => changeShowPassword(prev => { return (prev === "password" ? "text" : "password") })}></Checkbox>
                            <Typography sx={{ paddingTop: 1.5 }} id="checkBox">Show password</Typography>
                        </div>
                        <div id="row">
                            <Typography id="error-tag" sx={{ paddingTop: -2, color: "red" }} fontSize="12px" fontWeight="0.5px" className="hint">{errorMsg}</Typography>
                        </div>
                        <div id="row-button">
                            {/* <Router>
                            <Link to="/UserLogin">
                                <Button onClick={() => changePage(false)} variant="contained" color="primary">Login instead</Button>
                            </Link>

                            <Switch>
                                <Route path="/UserLogin">
                                    <UserLogin></UserLogin>
                                </Route>
                            </Switch>
                        </Router> */}
                            <Button onClick={() => changePage(false)} variant="contained" color="primary" >Login instead</Button>
                            <Button onClick={createUser} variant="contained" color="primary"  >Create Account</Button>
                        </div>
                    </form>
                </div>
            </div >
        )
    else
        return (
            <UserLogin></UserLogin>
        )


}