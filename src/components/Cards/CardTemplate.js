import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Avatar, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    padding: "12px",
  },
  container1: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
  },
  card: {
    // backgroundColor: "red",
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    height: "220px",
    position: "relative",
  },
  sub: {
    textTransform: "capitalize ",
    letterSpacing: "1.2px",
  },
  avatar: {
    position: "absolute",
    right: "0",
    bottom: "0",
    padding: "20px",
  },
  button: {
    position: "absolute",
    left: "0",
    bottom: "0",
    margin: "20px",

    background: "rgba(255, 255, 255, 0.3)",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  },
  time: {
    margin: "auto 0",
  },
}));

export default function Card(props) {
  const classes = useStyles();

  const { id, title } = props;
  return (
    <Paper
      style={{
        backgroundImage: `url(${props.image1})`,
        backgroundSize: "cover",
      }}
      className={classes.paper}
      elevation={5}>
      <div className={classes.container}>
        <div className={classes.sub}>
          <h3>{title} </h3>

          <p>{props.les} Lessons</p>
        </div>
        <div className={classes.time}> {props.time}</div>
      </div>
      <div className={classes.container1}>
        <Link to={`/dashboard/courses/${id}`}>
          <Button className={classes.button}>
            <PlayArrowIcon style={{ color: "black", fontSize: "24px" }} />
          </Button>

        </Link>

        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" src={props.avatarimg} />
        </div>
      </div>
    </Paper>
  );
}
