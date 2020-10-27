import React, {useState} from 'react'
import CenterGrid from '../Cards/index';
import {auth} from '../../firebase/firebase.utils';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScrollTabs from './Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Card, } from 'react-bootstrap';
import '../css/dashboard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
 
export function Dashboard() {
   

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e) =>{
        setValue(e.target.value)
;    }
    const percentage = 66;
    const cgpa = 4;

    return (
        <div>
            
            
                 <h5 className="welcome-text" style={{fontSize : '35px', color : "#5E81F4"}}>Welcome, <span className="font-weight-bold"> {auth.currentUser.displayName.split(" ")[0]} </span></h5>
                 <br/>
                 
                <br/>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-xl-9 pr-5" style={{borderRight : "2px solid #5E81F4"}}>
                        <ScrollTabs/>
                   </div>
                   <div className="col-xl-3" style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems:"center"}}>
                   <Card className="mb-5" style={{ maxWidth: '250px' }}>
                    <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
                        <Card.Title className="text-center">Attendance</Card.Title>
                        <br/>
                        <CircularProgressbar  styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          
        })} value={percentage} text={`${percentage}%`} />;
                        <br/>
                        <Card.Text>Absent : 10/40</Card.Text>
                       
                    </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ maxWidth: '250px' }}>
                    <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
                        <Card.Title className="text-center">CGPA</Card.Title>
                        <br/>
                        <CircularProgressbar value={cgpa*10} strokeWidth={5} background backgroundPadding={3} text={`${cgpa}/10`} />;
                        <br/>
                        <Card.Text>Completed : 3/8</Card.Text>
                    </Card.Body>
                    </Card>
                   </div>
               </div>
           </div>
                

            
        </div>
    )
}
