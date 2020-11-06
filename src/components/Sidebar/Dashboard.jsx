import React, { useState } from "react";
import CenterGrid from "../Cards/index";
import { auth } from "../../firebase/firebase.utils";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ScrollTabs from "./Tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Card } from "react-bootstrap";
import "../css/dashboard.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Attendance from "./Attendance";
import Cgpa from "./Cgpa";
import MyProfileDropdown from './MyProfileDropdown';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const percentage = 66;
  const cgpa = 4;

  return (
    <div>
      <div className="my-profile " style={{display:"flex", justifyContent:"flex-end"}}>
      <MyProfileDropdown  />
      </div>

      <br />

      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 pr-5">
            <ScrollTabs />
          </div>
          <div
            className="col-xl-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Attendance />
            <Cgpa />
          </div>
        </div>
      </div>
    </div>
  );
}
