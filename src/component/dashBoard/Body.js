import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


// import Header from '../component/dashBoard/Header'
// import SideBar from "../component/dashBo?ard/SideBar";
// import NoteHelper from "../contoller/NoteHelper"

import Note from './Note'
import '../../css/Body.css'
import NoteHelper from "../../contoller/NoteHelper";
// import { Typography } from "@mui/material";

export default function Body(props) {
    const noteState = useSelector((state) => state.note);
    const [title, getTitle] = useState()
    const [content, getContent] = useState()
    const saveNote = () => {
        console.log("title " + title + " and content " + content);
        if (title == undefined || content == undefined) {
            console.log("empty title and content");
            return false;
        }
        NoteHelper.saveNotes({ "title": title, "content": content, "token": localStorage.getItem("token") })
        window.location.reload(false)
    }

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
        <>
            {/* <Card sx={{ display: 'grid', padding: '5px', margin: '10px', width: '550px' }}> */}
            <Card>
                <div class="add-note">
                    {/* <Card> */}
                    <TextField placeholder="title" variant="filled" sx={{ width: "500px" }} value={title} onChange={(event) => { getTitle(event.target.value) }}></TextField>
                    <TextField placeholder="content" variant="filled" multiline rows={2} sx={{ width: "500px" }} value={content} onChange={(event) => { getContent(event.target.value) }}
                    // InputProps={{
                    //     endAdornment: (

                    // ),
                    // }}
                    ></TextField>
                    <Button variant="text" style={{ fontColor: 'black' }} onClick={saveNote}>close</Button>

                    {/* </Card> */}

                </div>
            </Card>
            <div class="body">
                {/* <Grid xs={12}> */}
                {/* <h4>{JSON.stringify((props.notes))}</h4>
            <h3>{(props.notes)}</h3> */}
                {
                    [...noteState['data']].map((note) => {
                        return (<Note class="note-item" key={note.title} title={note.title} content={note.content}></Note>)
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
        </>
    )
}