import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Grid from '@mui/material/Grid';


// import Header from '../component/dashBoard/Header'
// import SideBar from "../component/dashBo?ard/SideBar";
// import NoteHelper from "../contoller/NoteHelper"

import Note from './Note'
import '../../css/Body.css'

export default function Body(props) {
    const noteState = useSelector((state) => state.note);
    // const filteredNoteState = useSelector((state) => state.filtedNotes);
    // const searchString = useSelector((state) => state.searchString);

    console.log("from redux " + JSON.stringify(noteState));
    // console.log("fileterd notes from redux " + JSON.stringify(filteredNoteState));


    // const state=[];
    // useEffect(()=>{
    // state = useSelector((state) => state.note);
    // console.log("from redux "+ JSON.stringify(state));
    // },[])

    return (
        <div id="body">
            {/* <Grid xs={12}> */}
            {/* <h4>{JSON.stringify((props.notes))}</h4>
            <h3>{(props.notes)}</h3> */}
            {
                [...noteState['data']].map((note) => {
                    return (<Note key={note.title} title={note.title} content={note.content}></Note>)
                })
            }
            {/* {(searchString == "") ?
                ( [...noteState['data']].map((note) => {
                return (<Note key={note.title} title={note.title} content={note.content}></Note>)
            })):([...filteredNoteState['data']].map((note) => {
                    return (<Note key={note.title} title={note.title} content={note.content}></Note>)
                }))
            } */}

            {/* {[... props.notes].map((note) => {
                return (<Note key={note.title} title={note.title} content={note.content}></Note>)
            })} */}
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
            {/* </Grid> */}
        </div>
    )
}