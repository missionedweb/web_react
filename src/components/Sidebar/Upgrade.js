import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton';
import Axios from 'axios';

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

  const paymentHandler = async (e) => {
    const API_URL = 'http://localhost:8000/';
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: 'rzp_test_IYpWi4VwJref3r',
      name: "MissionEd",
      description: "Some Description",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}`;
         const captureResponse = await Axios.post(url, {})
         console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary">
          Upgrade to get more resources
        </Typography>
      </CardContent>
      <CardActions>
      <div onClick={paymentHandler}>
      <CustomButton className={classes.button}>
        Upgrade
      </CustomButton>
      </div>
     </CardActions>
    </Card>
  );
}
export default Upgrade;