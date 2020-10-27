import React,{ useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {firestore, auth} from '../../firebase/firebase.utils';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Attendance from './Attendance';
import Cgpa from './Cgpa';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 140,
    alignContent:"left"
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

const Profile = ({ user }) => {
    const classes = useStyles();
    const [curUser,setCur] = useState({});

    useEffect(() => {
        console.log(auth.currentUser.phoneNumber);
        setCur({
            displayName: auth.currentUser.displayName,
            phoneNumber: auth.currentUser.phoneNumber||'+91-89988382839',
            email: auth.currentUser.email
        });
        
        
    },[]);
    return (
        <div className={classes.root}>
        
      <Grid container spacing={8}>
        <Grid item xs={12}>
        <h2 style={{color:"#5840bb"}}>Account</h2>
        </Grid>
        <Grid item xs={12} sm={9}>
            <Grid container>
                <Grid item xs={12}>
                    <div style={{backgroundColor:"#5840bb", borderTopRightRadius:10,borderTopLeftRadius:10,margin:0,color:"white",textAlign:"center"}}>
                        <CardHeader
                        title="Profile"
                        />
                    </div>
                </Grid>
                
            </Grid>
            <Card className={classes.root} style={{height:"200px",borderColor:"#5840bb",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            
            <CardActionArea>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                    {/*<CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        alt="No image found"
                    />*/}
                    <Avatar variant="rounded" className={classes.rounded}>
                        <AssignmentIcon />
                    </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {curUser.displayName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Student
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p><strong>Phone:</strong></p>
                            <p><strong>Email:</strong></p>       
                        </Grid>
                        <Grid item xs={9}>
                        <p>{curUser.phoneNumber}</p>
                        <p>{curUser.email}</p>
                        
                        </Grid>
                    </Grid>
                    
                </CardContent>
                    </Grid>
                </Grid>
                
                </CardActionArea>
                
            </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Grid container>
                <Grid item xs={12}>
                <div style={{backgroundColor:"#5840bb", borderTopRightRadius:5,borderTopLeftRadius:5,margin:0,color:"white",textAlign:"center"}}>
                <CardHeader
                title="Course Registration"
                />
                </div>
                </Grid>
                
            </Grid>
            <Grid item xs={12}>
            <Card className={classes.root} style={{height:"200px"}}>
                <CardActionArea>
                    
                        <CardContent>
                            
                                <p>Course Enrollment Portal has been opened</p>
                                <Divider />
                                <p>Course Enrollment Portal has been opened</p>
                                <Divider />
                                <p>Course Enrollment Portal has been opened</p>
                        
                        </CardContent>
                    
                    
                    </CardActionArea>
                    
                </Card>
                </Grid>
        </Grid>
        <Grid item xs={12}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={3}>
                        <Attendance />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Cgpa />
                    </Grid>
                </Grid>
        </Grid>
      </Grid>
    </div>
      
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps,null)(Profile);