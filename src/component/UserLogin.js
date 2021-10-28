import React, { useState } from "react";
import { Button, TextField, Checkbox, Typography } from "@mui/material";


import '../css/UserRegister.css'
import logo from "../assets/download.jpeg"


export default function UserLogin(props) {

    const [fValue, changeFormValues] = useState({

        // "firstName": "",
        // "lastName":"",
        // "emailId":"",
        // "password":""

    });

    const getFormValues = (event) => {
        console.log("inside getform");
        changeFormValues({
            // event.target.name:event.target.lastName;

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

                    <div id="row" >
                        <TextField className="textField" sx={{ width: 480 }} placeholder="Username" label="emailId" name="emailId" value={fValue.emailId}></TextField>
                    </div>
                    <div id="row">
                        <TextField className="textField" type="password" sx={{ paddingRight: 2 }} placeholder="Password" label="password" name="password" value={fValue.password}></TextField>
                    </div>

                    <div id="row-button">
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </div>
                </form>
            </div>
        </div >
    )


}