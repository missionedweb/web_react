import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import "./TeacherNav.css";
import styled from "styled-components";
import TeacherSigninSuccess from "./TeacherSigninSuccess";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const TeacherSignupNav = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand style={{ color: "orange", marginLeft: ".6em" }} href="/">
        MissionED
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <div className="register">Already Registered?</div>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="signup" style={{ color: "white" }} href="/TeacherDashboardNew">
              Sign Up
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default TeacherSignupNav;
