import React, { useState } from "react";
import { Button, TextField, Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import '../css/UserRegister.css'
import logo from "../assets/download.jpeg"
// import ForgotPassword from '../component/ForgotPassword'
const UserHelper = require('../contoller/UserHelper')


export default function UserLogin(props) {
    const [fValue, changeFormValues] = useState({
        "email": "",
        "password": ""

    });
    const [showPassword, changeShowPassword] = useState("password")
    const [showLogin, changePage] = useState(true);

    const getFormValues = (event) => {
        changeFormValues({
            ...fValue,
            [event.target.name]: event.target.value
        })
        console.log(fValue);
    }

    const loginUser = () => {
        UserHelper.loginUser(fValue)
    }

    // if (showLogin === true) {
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
                            <span id="S">S</span> <br></br>login</Typography>
                        <br></br>

                    </div>
                    <form >

                        <div id="row" >
                            <TextField className="textField" sx={{ width: 480 }} placeholder="Username" label="email" name="email" value={fValue.email} onChange={getFormValues}></TextField>
                        </div>
                        <div id="row">
                            <TextField className="textField" type={showPassword} sx={{ paddingRight: 2 }} placeholder="Password" label="password" name="password" value={fValue.password} onChange={getFormValues}></TextField>
                        </div>
                        <div id="row">
                            <Checkbox sx={{ marginRight: 1 }} onChange={(e) => changeShowPassword(prev => { return (prev === "password" ? "text" : "password") })}></Checkbox>
                            <Typography sx={{ paddingTop: 1.5 }} id="checkBox">Show password</Typography>
                        </div>

                        <div id="row-button">
                            <Button onClick={loginUser} variant="contained" color="primary">Login</Button>
                            <Button  variant="contained" color="primary" component={Link} to="/forgotPassword">Forgot Password</Button>

                        </div>
                    </form>
                </div>
            </div >
        )
    // }
    // else {
    //     return (
    //         <ForgotPassword></ForgotPassword>
    //     )
    // }


}