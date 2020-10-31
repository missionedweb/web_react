import React from 'react'
import {Card, } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {Link} from 'react-router-dom';
const Cgpa = () => {
    const cgpa = 4;
    return (
        <Link className="link-to-grades" to="/dashboard/grades" >
        <Card className="" style={{ maxWidth: '250px' }}>
            <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
                <Card.Title className="text-center">CGPA</Card.Title>
                <br/>
                <CircularProgressbar value={cgpa*10} strokeWidth={5} background backgroundPadding={3} text={`${cgpa}/10`} />;
                <br/>
                <Card.Text>Completed : 3/8</Card.Text>
            </Card.Body>
        </Card>
        </Link>

    )
}

export default Cgpa;