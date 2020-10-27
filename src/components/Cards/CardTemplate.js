import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {  Avatar, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 285,
    padding : "10px"
  },
  media: {
    height: 110,
  },
  button:{
    "&:hover": {
      boxShadow : "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    
    },
  },
  link:{
    "&:hover": {
      
      textDecoration :"none"
    },
  }
});

export default function CardTemp(props) {
  const classes = useStyles();

  const { id, title } = props;
  return (
    


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
      <Link className={classes.link} to={`/dashboard/courses/${id}`}>
          <Button className={classes.button} style={{backgroundColor : "#5E81F4", marginRight : "20px", color:"white"}}>
          Watch Now  <PlayArrowIcon style={{ color: "black", fontSize: "24px" }} />
          </Button>

        </Link>
        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" src={props.avatarimg} />
        </div>
      </CardActions>
    </Card>

  );
}
