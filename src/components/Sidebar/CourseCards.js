import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {firestore} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
//var admin = require('firebase-admin');
import firebase from 'firebase/app';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    maxWidth: 385,
    padding : "10px"
  },
  media: {
    height: 210,
  },
});


function CourseCards(props){
    const classes = useStyles();
    const handleClick = async e => {
      e.preventDefault();
        var refre = firestore.collection('course').doc(props.id);
        var arrUnion = await refre.update({
          users: firebase.firestore.FieldValue.arrayUnion(props.user.currentUser.id)
        });
        
       alert(`You have successfully enrolled for the ${props.title} course`);
       //await refre.set({ users: [props.user.currentUser.id] },{merge:true});
    };
    
    return(
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image1}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.time}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleClick}>
          Enroll Now
        </Button>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
        </div>
    );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps,null)(CourseCards);