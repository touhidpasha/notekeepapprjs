import React, { useState, useEffect } from "react";

import Header from '../component/dashBoard/Header'
import SideBar from "../component/dashBoard/SideBar";
import NoteHelper from "../contoller/NoteHelper"

export default function DashBoard(props) {
    const [notes, setNotes] = useState([]);
    useEffect(async () => {
         console.log("useffect -1 "+localStorage.getItem("token"))
        // console.log("useeffect called" + token);
        const res = await NoteHelper.getAllNotes({ "token":(localStorage.getItem("token")) })

        // getNotes(JSON.parse(res.data))
        console.log(res.data);
        setNotes(res.data)

        console.log("notes from backend " + JSON.stringify(res.data));

        // console.log("useeffect called" + token);
        // console.log(NoteHelper.getAllNotes({ "token": token }))

    }, [])
    // console.log("token in dashboard " + props.token + " and email " + props.email);
    console.log("token from localStorage " + localStorage.getItem("token"));
    // console.log("useeffect " + token);
    // const res=NoteHelper.getAllNotes({ "token": token })


    return (
        <>
            <Header />
            <SideBar notes={notes}></SideBar>
        </>
    )

}