import React, {useState, useEffect,} from 'react'
import {firestore, auth} from '../../firebase/firebase.utils';
import { Grid } from "@material-ui/core";
import Card from './CourseCards';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function Courses() {
    const classes = useStyles();
    const [allCourses, setAllCourses] = useState([]);
    const [userId, setUserId] = useState(0);

    useEffect(()=>{
    var courseRef = firestore.collection("course").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            
            setAllCourses((allCourse)=>[
                ...allCourse,
                {
                    id : doc.id,
                    title : doc.data().title
                }
            ]);
        });
    });
}, [userId]);

    return (
        <div>
            <h1 className="" style={{color : "black"}}>Courses</h1>
            
            <br/>
        
    <Grid container spacing={3}>
    <div className={classes.root} style={{textAlign:"center"}}>
    {allCourses.length===0 && <CircularProgress />}
    </div>
      {allCourses.map(course=> (
        <Grid item xs={12} sm={4} key={course.id}>

          <Card
            id={course.id}
            title={course.title}
            les="200"
            image1={require(`../Images/${course.id}.jpg`)}
            time="2h 30min"
            avatarimg="https://img.cinemablend.com/filter:scale/quill/0/7/9/6/5/6/079656ce9e00f1ef328bb6c1a41958b4c0ceb6cb.jpg?mw=600"
          />
        </Grid>
      ))}
  </Grid>
        
        </div>
    )
}
