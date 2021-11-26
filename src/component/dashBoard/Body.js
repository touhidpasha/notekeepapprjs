import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Note from './Note'
import '../../css/Body.css'
import AddNote from "../../component/dashBoard/AddNote"

export default function Body(props) {

    return (
        <>
            <Card>
                <div class="popUpBar">
                    <AddNote></AddNote>
                </div>
            </Card>

            <div class="body">
                {
                    [...props.notes].map((note) => {
                        return (<Note showTrash={props.showTrash} color={note.color} id={note._id} class="note-item" key={note._id} title={note.title} content={note.content}></Note>)
                    })
                }
            </div>
        </>
    )
}