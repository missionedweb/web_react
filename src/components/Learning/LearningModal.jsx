import React, { useState } from "react";

//Firebase

//MaterialUI+Spring
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import Button from "@material-ui/core/Button";
import logo from "../../Images/logo.svg";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function LearningModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    standard: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, standard } = details;
    console.log(firstName, lastName, email, standard);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={handleOpen}
        className={classes.button}
        data-aos="zoom-in-up" data-aos-duration="1500"
        style={{ outline: " none" ,  background:"#fb8f1d" , width: 110 , height: 46 , borderRadius: "10px" }}>
        Register
      </Button>

       <a
        href="/features"
        className="btn"
        data-aos="zoom-in-up" data-aos-duration="1500"
        style={{
          background: "#FB8F1D",
          borderRadius: "10px",
          padding: "5px",
          marginRight: "44px",
          marginLeft: "20px",
          color: "#ffffff",
          fontSize: "20px",
          width: 110,
          height: 48,
          paddingTop: "8px",
          outline: "none",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"

        }}>
        Learn More
      </a> 

       {/* <Button
        variant="contained"
        color="secondary"
        type="button"
        data-aos="zoom-in-up" data-aos-duration="1500"
        style={{ outline: " none" , marginLeft: "20px" , paddingLeft:"10px", paddingRight:"10px", background:"#fb8f1d" , width: 116.6 , height: 46 , borderRadius: "10px" }}>
        Learn More
       </Button> */}

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div>
            <form onSubmit={handleSubmit} className={classes.paper} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <img src={logo} alt="logo" />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <h2>Get Details</h2>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={details.firstName}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={details.lastName}
                    autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email/ Phone No."
                    name="email"
                    value={details.email}
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel variant="outlined" id="demo-simple-select-label">
                      Class
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      name="standard"
                      value={details.standard}
                      onChange={handleChange}
                      label="Class"
                      variant="outlined"
                      fullWidth>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>8</MenuItem>
                      <MenuItem value={20}>9</MenuItem>
                      <MenuItem value={30}>10</MenuItem>
                      <MenuItem value={40}>11 Science</MenuItem>
                      <MenuItem value={50}>11 Commerce</MenuItem>
                      <MenuItem value={60}>12 Science</MenuItem>
                      <MenuItem value={70}>12 Commerce</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
