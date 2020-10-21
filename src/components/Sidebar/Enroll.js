import React, { useState } from 'react';
import LearningModal from '../Learning/LearningModal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },    
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Enroll = () => {
    const classes = useStyles();
    const [subject,setSubject] = useState('All');
    const [grades,setGrades] = useState("8");
    const [courseType,setCourseType] = useState("All types");
    return(
        <div>
        <div className={classes.root}>

        <AppBar position="static" style={{backgroundColor:"orange"}}>
          <Toolbar>
          <Grid container spacing={3}>
            
            <Grid item xs={6} sm={4}>
                
                <FormControl className={classes.formControl}>
                <Typography variant="h6" className={classes.title}>
                  <InputLabel htmlFor="age-native-simple">Subject</InputLabel>
                  <Select
                      native
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      inputProps={{
                      name: 'subject',
                      id: 'age-native-simple',
                      }}
                  >
                      <option value="All">All</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Thirty</option>
                  </Select>
                  </Typography>
                  </FormControl>
                
            </Grid>
            <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
          <Typography variant="h6" className={classes.title}>
            <InputLabel htmlFor="grade-native-simple">Grades</InputLabel>
            <Select
                native
                value={grades}
                onChange={e => setGrades(e.target.value)}
                inputProps={{
                name: 'grades',
                id: 'grade-native-simple',
                }}
            >
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </Select>
            </Typography>
            </FormControl>
            
            </Grid>
            <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
          <Typography variant="h6" className={classes.title}>
            <InputLabel htmlFor="course-native-simple">Course Type</InputLabel>
            <Select
                native
                value={courseType}
                onChange={e => setCourseType(e.target.value)}
                inputProps={{
                name: 'courseType',
                id: 'course-native-simple',
                }}
            >
                <option value="All types">All types</option>
                <option value="Normal Classroom">Normal Classroom</option>
                <option value="Competitve Preps">Competitve Preps</option>
                <option value="Regular">Regular</option>
                <option value="Crash Course">Crash Course</option>
            </Select>
            </Typography>
            </FormControl>
            
            </Grid>

        </Grid>
          
            
            
            
            
          </Toolbar>
        </AppBar>
      </div>
        </div>
    );
}

export default Enroll;