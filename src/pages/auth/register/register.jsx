import React, { useState } from "react";
import "./register.styles.scss";
//Firebase
import { auth, createUserProfileDocument } from "../../../firebase/firebase.utils";
//MaterialUI+Spring
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import Button from "@material-ui/core/Button";
import logo from "../../../Images/logo.svg";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function Register() {
  const [clicked, setClicked] = useState(false);

  // Toggle Password View
  const [values, setValues] = useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //Modal Component
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
    password: "",
    phone: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleOnChange = (value) => {
    setDetails((prevState) => ({ ...prevState, phone: value }));
  };

  //Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    const { firstName, lastName, email, password, phone, confirmpassword } = details;
    // check if passwords are equal
    if (password !== confirmpassword) {
      setClicked(false);

      alert("Passwords Donot Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      let displayName = firstName + " " + lastName;
      console.log(displayName);
      await createUserProfileDocument(user, { displayName, phone });
      setDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (err) {
      console.error(err.message);
      setClicked(false);
    }
  };
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();
  return (
    <div>
      <Link
        variant="outlined"
        type="button"
        onClick={handleOpen}
        className="btn login-btn mr-2"
        style={{
          width: 110,
          height: 46,
          textDecoration: "none",
          borderRadius: "10px",
          borderColor: "orange",
          background: "orange",
          color: "white ",
        }}>
        Register
      </Link>

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
                  <h2>Join MissionEd</h2>
                </Grid>

                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
                  <MuiPhoneNumber
                    variant="outlined"
                    defaultCountry={"in"}
                    fullWidth
                    onChange={handleOnChange}
                    required
                    id="phone"
                    label="Phone Number"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={details.email}
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={details.password}
                      onChange={handleChange}
                      name="password"
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Confirm Password"
                    name="confirmpassword"
                    value={details.confirmpassword}
                    type="password"
                  />
                </Grid>
              </Grid>
              {clicked ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}>
                  <CircularProgress size={24} color="orange" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}>
                  Sign Up
                </Button>
              )}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

// Styles
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
    [theme.breakpoints.down("lg")]: {
      width: "45vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "65vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
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
