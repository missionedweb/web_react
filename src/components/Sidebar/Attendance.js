import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {Card, } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Attendance = () => {
    const percentage = 66;
    return (
        
        <Card className="mb-5" style={{ maxWidth : "250px" }}>
        <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
            <Card.Title className="text-center">Attendance</Card.Title>
            <br/>
            <CircularProgressbar  styles={buildStyles({
textColor: "red",
pathColor: "turquoise",
trailColor: "gold"
})} value={percentage} text={`${percentage}%`} />;
            <br/>
            <Card.Text>Absent : 10/40</Card.Text>
           
        </Card.Body>
        </Card>
    )
}

export default Attendance;
