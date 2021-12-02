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
import { Circle, Wheel, Github } from '@uiw/react-color'
import Image from "material-ui-image";
import ClickAwayListener from '@mui/material/ClickAwayListener';

import '../../css/Note.css';
import NoteHelper from "../../contoller/NoteHelper"
import * as actionCreators from "../../../src/state/action-creators/servent"  //servent or methods
import ImageUpload from "./ImageUpload";

export default function Note(props) {
    const dispatch = useDispatch();
    const { setNotes, setTrashNotes, getTrashNotes } = bindActionCreators(actionCreators, dispatch);
    const [flag, changeFlag] = useState()

    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)
    const [update, setUpdate] = useState(false)
    const [color, setColor] = useState(props.color);
    const [showColorPicker, setColorPicker] = useState(false)
    const [key, setKey] = useState(props.imageKey)
    const [image, setImage] = useState(null)

    useEffect(async () => {
        setImage(NoteHelper.getImage({ "key": key, "token": localStorage.getItem("token") }))
    }, [key])



    const setColorHandler = (color) => {
        setColor(color)
    }
    useEffect(async () => {
        updateColor(props.id)
        changeFlag(!flag)
    }, [color])
    const updateColor = (id) => {
        console.log("color is" + color);
        NoteHelper.updateColor({ "id": id, "token": localStorage.getItem("token"), "color": color })
        changeFlag(!flag)
    }

    const [imagePopUp, setImagePopUp] = useState(false)
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

        console.log("notes after color" + JSON.stringify(res.data));
        // setColorPicker(!showColorPicker)
        // setImagePopUp(false)
    }, [flag])
    // useEffect(async () => {
    //     setImagePopUp(false)
    // },[()=>{setTimeout(()=>{},4000)}])



    const updateNote = (id) => {
        NoteHelper.updateNote({ "id": id, "token": localStorage.getItem("token"), "title": title, "content": content })
        changeFlag(!flag)
        setImagePopUp(false)
    }
  
    const handleClickAway = (id) => {
        console.log("click away called"); 
        updateNote(id)
    };

    // if (!imagePopUp)
    return (
        <>
            <Card sx={{ display: 'grid', padding: '5px', margin: '10px', width: '540px', minHeight: '100px' }} key={props.id} loading='lazy'>
                <CardContent class="card">
                    {/* {image ===!null ? null : <div> */}
                    {/* <Image src={image} /> */}
                    {/* </div>} */}

                    <div class="note" style={{ 'background-color': color, 'border-radius': '5px' }} onClick={() => { setUpdate(true) }}>
                        {update ?
                            <ClickAwayListener onClickAway={()=>{handleClickAway(props.id)}}>
                                <div id="edit-note">
                                    <TextField variant="filled" value={title} onChange={(event) => { setTitle(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center', fontWeight: 'bold' } }}></TextField>
                                    <TextField multiline variant="filled" value={content} onChange={(event) => { setContent(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center' } }}></TextField>
                                </div>
                             </ClickAwayListener> 
                            :
                            <div>
                                <h3 variant="filled" value={title} onChange={(event) => { setTitle(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center', fontWeight: 'bold' } }}>{title}</h3>
                                <Typography multiline style={{ wordWrap: 'break-word' }} variant="filled" value={content} onChange={(event) => { setContent(event.target.value) }} inputProps={{ min: 0, style: { textAlign: 'center' } }}><pre>{content}</pre></Typography>
                            </div>
                        }
                    </div>

                    <div class="parent-icons">
                        <div class="icons">
                            {
                                (props.showTrash) ? <DeleteIcon onClick={() => (props.showTrash) ? deleteNote(props.id) : moveToTrash(props.id)}></DeleteIcon>
                                    : <>
                                        {/* <AddAlertIcon></AddAlertIcon> */}

                                        <div onClick={() => { setColorPicker(!showColorPicker) }}>
                                            {(!showColorPicker) ? <ColorLensIcon >
                                            </ColorLensIcon> : <Github color={color} onChange={async (color) => { setColorHandler(color.hex); }} />}


                                        </div>
                                        <ImageIcon onClick={() => setImagePopUp(!imagePopUp)}></ImageIcon>
                                        <DeleteIcon onClick={() => (props.showTrash) ? deleteNote(props.id) : moveToTrash(props.id)}></DeleteIcon>
                                        {/* <ArchiveIcon></ArchiveIcon> */}
                                        <CreditScoreIcon onClick={() => updateNote(props.id)}></CreditScoreIcon>
                                        {/* <MoreVertIcon></MoreVertIcon> */}
                                    </>
                            }
                        </div>
                    </div>
                    {imagePopUp ? <ImageUpload id={props.id} /> : console.log()}
                </CardContent>
            </Card>
        </>
    )
    // else
    //     return <ImageUpload></ImageUpload>
}