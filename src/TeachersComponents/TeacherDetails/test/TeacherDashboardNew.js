import React, { Component } from "react";

import firebase from "../../../firebase/firebase.utils";
import TeacherHome from "./TeacherHome";
import TeacherLoginNew from "./TeacherLoginNew";
import TeacherDashboard from "../../../pages/dashboard/TeacherDashboard";

class TeacherDashboardNew extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">{this.state.user ? <TeacherDashboard /> : <TeacherLoginNew />}</div>
    );
  }
}

export default TeacherDashboardNew;
