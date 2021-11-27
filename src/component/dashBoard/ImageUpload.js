import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'

import NoteHelper from "../../contoller/NoteHelper";
import * as actionCreators from "../../../src/state/action-creators/servent"  //servent or methods

export default function ImageUpload(props) {
    const dispatch = useDispatch();
    const { setNotes, setTrashNotes, getTrashNotes } = bindActionCreators(actionCreators, dispatch);
    const [open, setOpen] = React.useState(false);
    const [title, getTitle] = useState()
    const [content, getContent] = useState()
    const [flag, changeFlag] = useState()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   
    useEffect(async () => {
        setOpen(true)
    }, [])

    useEffect(async () => {
        // setOpen(true)
        const res = await NoteHelper.getAllNotes({ "token": (localStorage.getItem("token")) })
        setNotes(res.data, "")
        setTrashNotes(res.data, "")
    }, [flag])

    //image uploading 
    const [fileData, getFile] = useState();
    const getImage = (event) => {
        getFile(event.target.files[0])

    }
    const upload = () => {
        var data = new FormData();
        console.log("from state " + JSON.stringify(fileData));
        console.log("from formdata " + JSON.stringify(data));
        data.append("image", fileData)
        const res = NoteHelper.uploadImage(data)


    }

    return (
        <div>
            {/* <Typography onClick={handleClickOpen} > Select an image...</Typography> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Select an image...
                </DialogTitle>
                <DialogContent>
                    <div>
                        <form>
                            <input type="file" name='image' onChange={getImage} ></input>
                            {/* <Button  onClick={upload}  variant="contained" color="primary" >upload</Button> */}
                        </form>

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button variant="text" style={{ fontColor: 'black' }} onClick={() => { upload(); handleClose(); changeFlag(!flag) }}>close</Button>
                    <Button variant="text" style={{ fontColor: 'black' }} onClick={() => { upload(); handleClose(); changeFlag(!flag) }}>submit</Button>

                </DialogActions>
            </Dialog>
        </div>
    );

}