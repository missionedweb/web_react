import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./TeacherNav.css";
import TeacherSignup from "./TeacherSignup";

function TeacherNav() {
  return (
    <Router>
      <MDBNav className="justify-content-end">
        <MDBNavItem></MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="register" disabled to="">
            Already Registered?
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <Route path="/TeacherSignup" component={() => <TeacherSignup />} />
          <MDBNavLink className="signup" to="/TeacherSignup">
            Signup
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem></MDBNavItem>
      </MDBNav>
    </Router>
  );
}

export default TeacherNav;
