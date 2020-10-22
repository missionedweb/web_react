import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "./CardTemplate";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

function CenteredGrid({ currentUser }) {
  const [courses, setCourses] = useState([]);
  var userId;
  if (currentUser) {
    userId = currentUser.id;
  }

  const classes = useStyles();
  useEffect(() => {
    var courseRef = firestore.collection("course");
    console.log({userId});
    //query if course contains auth user.
    var query = courseRef.where("users", "array-contains", `${userId}`);
    query
      .get()
      .then(function (querySnapshot) {
        
        querySnapshot.forEach(function (doc) {
          
          setCourses((course) => [
            ...course,
            {
              id: doc.id,
              title: doc.data().title,
            },
          ]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [userId]);

  return (
    <div className={classes.root}>
    
      <Grid container spacing={3}>
        {courses &&
          courses.map((course) => (
            <Grid item xs={12} sm={6} className={classes.card} key={course.id}>
              <Card
                id={course.id}
                title={course.title}
                les="200"
                image1={require("../Images/image20.png")}
                time="2h 30min"
                avatarimg="https://img.cinemablend.com/filter:scale/quill/0/7/9/6/5/6/079656ce9e00f1ef328bb6c1a41958b4c0ceb6cb.jpg?mw=600"
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
}));

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(CenteredGrid);
