import React,{ useState,Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Search, Create, ThumbUpAlt, Comment} from '@material-ui/icons';
import {Card, Typography,CardContent,CardActions} from '@material-ui/core';
import Internships from './Internships';
import JobsPage from './JobsPage';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    fontSize:9
  },
}));

 
const Jobs = () => {
    const classes = useStyles();
    const [selected,setSelected] = useState("Internships");
    

    return (
      <div className="container-fluid ">
        <div className="row " style={{maxWidth:'80%', marginBottom:20}}>
            <div className="col-lg-6" style={{display:"flex", }}>
                <Search className="mt-2" style={{display:"inline", color:"#5E81F4"}}/>
            <input className="form-control" placeholder="Search " name="search"/>
            </div>
            <div className="col-lg-6">
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
              <Button style={{color:(selected==='Jobs')?'#5840bb':'grey', fontWeight:(selected==='Jobs')?700:300}} onClick={e => setSelected("Jobs")}>Jobs</Button>
              <Button style={{color:(selected==='Internships')?'#5840bb':'grey', fontWeight:(selected==='Internships')?700:300}} onClick={e => setSelected("Internships")}>Internships</Button>
              <Button style={{color:(selected==='Events')?'#5840bb':'grey', fontWeight:(selected==='Events')?700:300}} onClick={e => setSelected("Events")}>Events</Button>
              <Button style={{color:(selected==='Q/A')?'#5840bb':'grey', fontWeight:(selected==='Q/A')?700:300}} onClick={e => setSelected("Q/A")}>Q/A</Button>
          </ButtonGroup>
            </div>
        </div>
        {selected==='Internships' && <Internships />}
        {selected==='Jobs' && <JobsPage />}
      </div>
            
            
        
    )
}

export default Jobs;