import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import firebase from "../../firebase/firebase.utils";
import TeacherDashboard from "../../pages/dashboard/TeacherDashboard";
import TeacherLogin from "./TeacherLogin";

import "./TeacherSignup.css";

class TeacherSignup extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <TeacherDashboard /> : <TeacherLogin />}</div>;
  }
}

export default TeacherSignup;
