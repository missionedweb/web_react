import React, { Component } from "react";
import firebase from "../../../firebase/firebase.utils";

class TeacherHome extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>Welcome to Home</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default TeacherHome;
