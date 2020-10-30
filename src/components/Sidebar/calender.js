import { DeveloperBoardOutlined } from '@material-ui/icons';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextField from '@material-ui/core/TextField';

export default function calender(props){
    const date = new Date();
    return(
        <div>
            <h1 className="text-muted">Calender</h1>
            <br/>
            <br/>
            <br/>
            <div className="container-fluid">
                <div className="row">
                        <div className="col-lg-7">
                           <div className="notes">
                           <span>8 am</span>
                            <TextField  fullWidth/>
                           </div>
                           <br/>
                           <div className="notes">
                           <span>10 pm</span>
                            <TextField  fullWidth/>
                           </div>
                           <br/>
                           <div className="notes">
                           <span>11:30 pm</span>
                            <TextField  fullWidth/>
                           </div>
                           <br/>
                           <div className="notes">
                           <span>1:00 pm</span>
                            <TextField  fullWidth/>
                           </div>
                           <br/>
                           <div className="notes">
                           <span>3:00 pm</span>
                            <TextField  fullWidth/>
                           </div>
                           <br/>
                        </div>
                        <div className="col-lg-5" style={{display:"flex", justifyContent:"center"}}> 
                            
                             <Calendar className="p-3" value={date}/>
                        </div>
                </div>  
            </div>
        </div>
    );
}