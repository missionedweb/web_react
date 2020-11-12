import React, { Component } from "react";
import firebase from "../../firebase/firebase.utils";
import "./dashboard.styles.scss";
import TeacherSidebar from "../../components/Sidebar/TeacherSidebar";
import NavbarComponent from "../../components/NavbarComponent";
// import DashNavbar from "../../components/DashNavbar/dashnavbar";
import SideBar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

class TeacherDashboard extends Component {
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
        {/* <DashNavbar /> */}
        <div>
          <h1 style={{ color: "black", marginLeft: "6em" }}>You are Signed In.</h1>

          <button
            style={{
              float: "right",
              marginRight: "2em",
              marginTop: "-17px",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={this.logout}>
            Logout
          </button>
        </div>

        <TeacherSidebar />
      </div>
    );
  }
}

export default TeacherDashboard;
