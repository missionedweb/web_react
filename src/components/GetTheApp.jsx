import React, { useState } from "react";
import Group52 from "../Images/Group52.png";
import books from "../Images/books.png";
import counsellingImg from "../Images/counsellingImg.png";
import swal from "sweetalert";
import AOS from "aos";
import MuiPhoneNumber from "material-ui-phone-number";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Fade from 'react-bootstrap/Fade';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import logo from '../Images/logo.svg';

const useStyles = makeStyles((theme) => ({
  button: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    margin: theme.spacing(2, 0, 2),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3),
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
    borderRadius: "5px",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5, 0),
    fontSize: "16px",
  },
}));



AOS.init();
const GetTheApp = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alertModal = () => {
    if (value !== "") {
      swal({
        text: "Stay connected someone from MissionEd team will reach out soon",
        icon: "success",
      });
    }
  };
  const handleOnChange = (value) => {
    setValue((prevState) => ({ ...prevState, phone: value }));
  };
  return (
    <div>
      <div>
        <div className="container-fluid get-app">
          <div className="text-block">
            <img
              className="img-mobile"
              src={Group52}
              alt=""
              data-aos="flip-up"
              data-aos-duration={1500}
            />
            <p className="app-txt" data-aos="fade-right" data-aos-duration="1000">
              <span className="app">
                Get the app now! <br />
              </span>
              <br />
              Download the app and start learing with MissionEd at your
              <br /> fingertips.
              <br />
              <br />
              Over 500+ installs already
              <br />
              <br />
              <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned">
                <button
                  className="download border-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  >
                  Download
                </button>
              </a>
              <img
                className="books"
                src={books}
                alt=""
                data-aos="flip-up"
                data-aos-duration="2000"
              />
            </p>
          </div>
        </div>
        <div className="container-fluid counselling">
          <div className="counselling-left" data-aos="zoom-out" data-aos-duration="1000">
            <p className="app">
              <span data-aos="zoom-out" data-aos-duration="1000">
                Get a free counselling today!
              </span>
              <br />
            </p>
            Talk to our experts online and get free counselling whenever you
            <br /> needs and learn how MissionEd can help you in overcoming <br />
            all your academic challenges.
            <br />
            <br />
            <br />
            <p />
            <div className="buttonIn" data-aos="zoom-out" data-aos-duration="500" style={{ height : "33px", width :"300px", borderRadius : "5px"}}>
              <MuiPhoneNumber
                defaultCountry={"in"}
                onChange={handleOnChange}
                required
                id="phone"
                name="phone"
                value={value}
                
                style={{border : "1px solid black" ,height : "32px", borderRadius : "5px 0px 0px 5px"}}
              />
              {/* <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} borderBottom={1} border={1}/> */}
              {/* <button 
              
              //className="joins" 
              onClick={alertModal} 
              style={{ background : "orange" , border : "none" , width : "75px" , borderRadius : "0px 5px 5px 0px" }}
              >
                Join
              </button> */}
      <Button style={{ background : "orange" , border : "none" , width : "75px" , borderRadius : "0px 5px 5px 0px" }}  onClick={handleShow}>
        Join
      </Button>

      <Modal show={show} onHide={handleClose}
      className={classes.modal}
      >
        <div>
            <form  
            className={classes.paper}
            style = {{ width : "100%" }}
            noValidate
             >
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <img src={logo} alt="logo" />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <h2>JOIN US?</h2>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email/ Phone No."
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={alertModal} 
                style = {{ width : "100%" , backgroundColor : "blue" , color : "white" }}
                >
                Submit
              </Button>
            </form>
          </div>
      </Modal>

              
            </div>
          </div>
          <img
            className="counselling-img"
            src={counsellingImg}
            data-aos="fade-left"
            data-aos-duration="1000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;

