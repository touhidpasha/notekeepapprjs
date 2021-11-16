import React, { useState, useEffect } from "react";

// import Header from '../component/dashBoard/Header'
// import SideBar from "../component/dashBo?ard/SideBar";
// import NoteHelper from "../contoller/NoteHelper"

import Note from './Note'
import '../../css/Body.css'

export default function Body(props) {
    return (
        <div id="body">
            {/* <h4>{JSON.stringify((props.notes))}</h4>
            <h3>{(props.notes)}</h3> */}

            {[... props.notes].map((note) => {
                return (<Note key={note.title} title={note.title} content={note.content}></Note>)
            })}
            {/* {{for(var i = 0; i < props.notes.length; i++){
         ( <Note title={props.notes[i].title} content={props.notes[i].content} ></Note>)
        }} */}
            {/* // Array.from(props.notes).map((note) => (
        //   <Note id={note.title} title={note.title} content={note.content}></Note>))} */}
            {/* <DrawerHeader /> */}
            {/* {dict.map(element =>{ */}
            {/* <Note id="1" title="first note" content="first note content"></Note> */}
            {/* <Note id="2" title="first note" content="first note content"></Note> */}

            {/* })} */}
            {/* <h3>all the notes will come here</h3> */}
        </div>
    )
}