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
import Attendance from './Attendance';
import Cgpa from './Cgpa';
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
                   <div className="col-xl-3" style={{display : "flex", flexDirection : "column", justifyContent : "center", }}>
                   <Attendance />
                    <Cgpa />
                    

                   </div>
               </div>
           </div>
                

            
        </div>
    )
}
