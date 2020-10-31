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

function getInternships(){
  return [
    {name:'Internships in Management Consultancy',
    interns: [
      {
        jobTitle :'Business Analyst Intern',
        desc: 'Full Time - Job',
        company: 'Whizhunt Consultancy',
        place:'Hyderabad'
      },
      {
        jobTitle :'Human Resourse Intern',
        desc: 'Full Time - Internship Program',
        company: 'IHA Consultancy Services',
        place:'Hyderabad'
      },
      {
        jobTitle :'Marketing Operations Intern',
        desc: 'Part Time - Internship Program',
        company: 'Career Tome',
        place:'Hyderabad'
      }
    ]},
    {name:'Internships in Mechanical Engineering',
      interns: [
      {
        jobTitle :'Mechanical 3D Modelling',
        desc: 'Full Time - Internship Program',
        company: 'Excelnow Engineering',
        place:'Hyderabad'
      },
      {
        jobTitle :'Industrial Design Engineer',
        desc: 'Full Time - Job',
        company: 'Techosolution India Private LTD.',
        place:'Hyderabad'
      },
      {
        jobTitle :'Robotics Intern',
        desc: 'Full Time - Internship Program',
        company: 'Hello World Robotics Inc.',
        place:'Hyderabad'
      }
    ]}
  ]
}
 
const Jobs = () => {
    const classes = useStyles();
    const [selected,setSelected] = useState("Internships");
    const internships = getInternships();

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
        {internships && internships.map(intern =>(<Fragment>
          <h4 style={{marginBottom:10, marginTop:10}}>{intern.name}</h4>
          <div className="row">
          {intern.interns.map(inte => (
            <div className="col-lg-4">
            <Card className={classes.root} variant="outlined" style={{width:"100%"}}>
              <CardContent>
                
                <Typography variant="h5" component="h3">
                  {inte.jobTitle}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {inte.desc}
                  <br />
                  <br />
                </Typography>
                <Typography variant="body2" component="p">
                  {inte.company}
                </Typography>
                <Typography className={classes.pos} color="textPrimary">
                  {inte.place}
                </Typography>
              </CardContent>
              <CardActions style={{alignItems:"right"}}>
                <Button variant="contained" color="primary" size="small">Apply</Button>
              </CardActions>
            </Card>
            </div>
          ))}
        </div></Fragment>))}
      </div>
            
            
        
    )
}

export default Jobs;