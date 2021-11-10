import React, { useState } from "react";
import { Button, TextField, Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import '../css/UserRegister.css'
import logo from "../assets/download.jpeg"
// import ResetPassword from "../login/ResetPassword";
const UserHelper = require('../contoller/UserHelper')

export default function ForgotPassword(props) {
    const [email, getEmail] = useState("");
    const [hasEmailSend, getMailStatus] = useState(false)

    const getEmailHandler = (event) => {
        getEmail(event.target.value)
    }

    const sendOTP = () => {
        getMailStatus(UserHelper.sendOTP(email))
        console.log("mail has sent");
    }

    // if (hasEmailSend !== true)
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
                            <span id="S">S</span> <br></br></Typography>
                        <br></br>

                    </div>
                    <form >
                        <div id="row" >
                            <TextField className="textField" sx={{ width: 480 }} placeholder="Username" label="email" name="email" value={email} onChange={getEmailHandler}></TextField>
                        </div>
                        <div id="row-button">
                            <Button onClick={sendOTP} variant="contained" color="primary" component={Link} to="/resetPassword">GET OTP</Button>
                        </div>
                    </form>
                </div>
            </div >
        )
    // else
    //     return (
    //         <ResetPassword email={email}></ResetPassword>

    //     )
}