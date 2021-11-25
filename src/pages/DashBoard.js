import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'

import Header from '../component/dashBoard/Header'
import SideBar from "../component/dashBoard/SideBar";
import NoteHelper from "../contoller/NoteHelper"
import  * as actionCreators  from "../state/action-creators/servent"  //servent or methods

export default function DashBoard(props) {
    const dispatch=useDispatch();
    const {setNotes, setTrashNotes,getTrashNotes}=bindActionCreators(actionCreators,dispatch);
    const [notes, saveNotes] = useState([]);
    useEffect(async () => {
        props.history.push(localStorage.getItem("token")=== null?"/login":"/dashboard")
         console.log("useffect -1 "+localStorage.getItem("token"))
        const res = await NoteHelper.getAllNotes({ "token":(localStorage.getItem("token")) })
        console.log(res.data);
        saveNotes(res.data)
        setNotes(res.data,"")
        setTrashNotes(res.data,"")
        console.log("notes from backend " + JSON.stringify(res.data));
    }, [])
    console.log("token from localStorage " + localStorage.getItem("token"));
    return (
        <>
            <Header />
            <SideBar notes={notes}></SideBar>
        </>
    )

}