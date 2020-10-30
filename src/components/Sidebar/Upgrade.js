import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: "flex",
    objectFit: 'contain',
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 200,
    marginLeft: '8px',
    textAlign: 'center',
    backgroundColor: '#F5F5FB',
  },
  title: {
    fontSize: 14,
  },
  button: {
    paddingBottom: '20px'
  }
});

const Upgrade = () => {
  const classes = useStyles();

  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary">
          Upgrade to get more resources
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/dashboard/pricing">
      <CustomButton className={classes.button}>
        Upgrade
      </CustomButton>
      </Link>
     </CardActions>
    </Card>
  );
}
export default Upgrade;