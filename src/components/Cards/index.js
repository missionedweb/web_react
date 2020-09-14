import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from './CardTemplate';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.card}>
          <Card
            subject="civics"
            les="200"
            // image1="url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png')"
            image1={require('../Images/image20.png')}
            time="2h 30min"
            avatarimg="https://img.cinemablend.com/filter:scale/quill/0/7/9/6/5/6/079656ce9e00f1ef328bb6c1a41958b4c0ceb6cb.jpg?mw=600"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.card}>
          <Card
            subject="Physics"
            les="200"
            image1={require('../Images/image23.png')}
            time="2h 30min"
            avatarimg="https://img.cinemablend.com/filter:scale/quill/0/7/9/6/5/6/079656ce9e00f1ef328bb6c1a41958b4c0ceb6cb.jpg?mw=600"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.card}>
          <Card
            subject="Biology"
            les="200"
            image1={require('../Images/image24.png')}
            time="2h 30min"
            avatarimg="https://img.cinemablend.com/filter:scale/quill/0/7/9/6/5/6/079656ce9e00f1ef328bb6c1a41958b4c0ceb6cb.jpg?mw=600"
          />
        </Grid>
      </Grid>
    </div>
  );
}
