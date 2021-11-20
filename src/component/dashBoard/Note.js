import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArchiveIcon from '@mui/icons-material/Archive';

import '../../css/Note.css';
import NoteHelper from "../../contoller/NoteHelper"

export default function Note(props) {
    const moveToTrash=(id) => {
        NoteHelper.moveToTrash({"id":id,"token":localStorage.getItem("token")})
        console.log(id+" is deleted");
        window.location.reload(false)
    }

    const deleteNote=(id) => {
        NoteHelper.deleteNote({"id":id,"token":localStorage.getItem("token")})
        window.location.reload(false)

    }
    return (
        <>

            <Card  sx={{ display: 'grid', padding: '5px', margin: '10px', width: '550px' }} >
                {/* <Card className="card"> */}
                
                <CardContent class="card" >
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="h6">{props.content}</Typography>
                    <div class="icons">
                        <AddAlertIcon></AddAlertIcon>
                        <PersonAddIcon></PersonAddIcon>
                        <ColorLensIcon></ColorLensIcon>
                        <ImageIcon></ImageIcon>
                        <DeleteIcon onClick={()=>(props.showTrash)?deleteNote(props.id):moveToTrash(props.id)}></DeleteIcon>
                        <ArchiveIcon></ArchiveIcon>
                        <MoreVertIcon></MoreVertIcon>
                    </div>
                </CardContent>
                
            </Card>

        </>
    )

}