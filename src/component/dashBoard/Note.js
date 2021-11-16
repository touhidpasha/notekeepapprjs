import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../../css/Note.css';

export default function Note(props){
    return(
        <>
        <Card className="card" sx={{display:'grid', padding: '5px', margin: '10px',width: '400px'}}>
            <CardContent>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h6">{props.content}</Typography>
            </CardContent>
        </Card>
        </>
    )

}