import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ArchiveIcon from '@mui/icons-material/Archive';
import TextField from '@mui/material/TextField';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'

import '../../css/Note.css';
import NoteHelper from "../../contoller/NoteHelper"
import * as actionCreators from "../../../src/state/action-creators/servent"  //servent or methods

export default function Note(props) {
    const dispatch = useDispatch();
    const { setNotes, setTrashNotes, getTrashNotes } = bindActionCreators(actionCreators, dispatch);
    const [flag, changeFlag] = useState()
    const moveToTrash = (id) => {
        NoteHelper.moveToTrash({ "id": id, "token": localStorage.getItem("token") })
        console.log(id + " is deleted");
        changeFlag(!flag)
    }

    const deleteNote = (id) => {
        NoteHelper.deleteNote({ "id": id, "token": localStorage.getItem("token") })
        changeFlag(!flag)
    }
    useEffect(async () => {
        const res = await NoteHelper.getAllNotes({ "token": (localStorage.getItem("token")) })
        setNotes(res.data, "")
        setTrashNotes(res.data, "")
        setUpdate(false)
    }, [flag])

    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)
    const [update, setUpdate] = useState(false)

    const updateNote = (id) => {
        NoteHelper.updateNote({ "id": id, "token": localStorage.getItem("token"), "title": title, "content": content })
        changeFlag(!flag)
    }

    return (
        <>
            <Card sx={{ display: 'grid', padding: '5px', margin: '10px', width: '540px' }} key={props.id}>
                <CardContent class="card" >
                    <div class="note" onClick={() => { setUpdate(true) }}>
                        {update ?
                            <div id="edit-note">
                                <TextField variant="filled" value={title} onChange={(event) => { setTitle(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center', fontWeight: 'bold' } }}></TextField>
                                <TextField multiline variant="filled" value={content} onChange={(event) => { setContent(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center' } }}></TextField>
                            </div> :
                            <div>
                                <h3 variant="filled" value={title} onChange={(event) => { setTitle(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center', fontWeight: 'bold' } }}>{title}</h3>
                                <Typography multiline variant="filled" value={content} onChange={(event) => { setContent(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center' } }}><pre>{content}</pre></Typography>
                            </div>
                        }
                    </div>

                    <div class="parent-icons">
                        <div class="icons">
                            {
                                (props.showTrash) ? <DeleteIcon onClick={() => (props.showTrash)? deleteNote(props.id) : moveToTrash(props.id)}></DeleteIcon>
                                    : <>
                                        <AddAlertIcon></AddAlertIcon>
                                        <ColorLensIcon></ColorLensIcon>
                                        <ImageIcon></ImageIcon>
                                        <DeleteIcon onClick={() => (props.showTrash) ? deleteNote(props.id) : moveToTrash(props.id)}></DeleteIcon>
                                        <ArchiveIcon></ArchiveIcon>
                                        <CreditScoreIcon onClick={() => updateNote(props.id)}></CreditScoreIcon>
                                        <MoreVertIcon></MoreVertIcon>
                                    </>
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}