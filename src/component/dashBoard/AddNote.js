import React ,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'

import NoteHelper from "../../contoller/NoteHelper";


export default function AddNote(props) {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [title, getTitle] = useState()
    const [content, getContent] = useState()
    const [flag, changeFlag] = useState()

    const saveNote = () => {
        console.log("title " + title + " and content " + content);
        if (title == undefined || content == undefined) {
            console.log("empty title and content");
            return false;
        }
        NoteHelper.saveNotes({ "title": title, "content": content, "token": localStorage.getItem("token") })
        // window.location.reload(false)
        changeFlag(!flag)
        return true;
    }

    useEffect(async () => {
        const res = await NoteHelper.getAllNotes({ "token":(localStorage.getItem("token")) })

    },[flag])
    return (
        <div>
            <Typography onClick={handleClickOpen} > Take a note...</Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {/* {"Use Google's location service?"} */}
                </DialogTitle>
                <DialogContent>
                    <Card>
                        {
                            ((!props.showTrash) ? (<div class="add-note">
                                <TextField placeholder="title" variant="filled" sx={{ width: "500px" }} value={title} onChange={(event) => { getTitle(event.target.value) }}></TextField>
                                <TextField placeholder="content" variant="filled" multiline rows={2} sx={{ width: "500px" }} value={content} onChange={(event) => { getContent(event.target.value) }}
                                ></TextField>
                                {/* <Button variant="text" style={{ fontColor: 'black' }} onClick={saveNote}>close</Button> */}
                            </div>) : (console.log("trash is displaying")))
                        }

                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" style={{ fontColor: 'black' }} onClick={saveNote}>close</Button>
                    <Button variant="text" style={{ fontColor: 'black' }} onClick={saveNote}>submit</Button>

                </DialogActions>
            </Dialog>
        </div>
    );

}