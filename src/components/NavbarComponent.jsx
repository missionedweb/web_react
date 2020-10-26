import React from "react";
import NavigationLogo from "../Images/NavigationLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import Register from "../pages/auth/register/register";
import Login from "../pages/auth/login/login";

import $ from "jquery";

function NavbarComponent({ currentUser }) {
  // window.addEventListener("scroll", function () {
  //   let header = document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 150);
  // });
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
  });
  return (
    <>
      <div id="header" className="fixed-top">
        <div className="row">
          <Navbar expand="xl" className="navbar-expand-xl bg-light navbar-default">
            <Navbar.Brand href="/" className="ml-3">
              <img className="logo mt-n4 mr-auto" src={NavigationLogo} alt="logo" />
              <span className="missioned-nav  font-weight-bold">
                Mission<span className="ed">Ed</span>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3" />
            <Navbar.Collapse id="basic-navbar-nav navbar-left">
              <Nav className="navbar transparent ml-auto mr-auto">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item mr-auto ml-2">
                    <a href="/" className="nav-link">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item mr-auto ml-2">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                      {" "}
                      CLASSES <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu multi-column columns-2">
                      <div className="row">
                        <div className="col-sm-4 ml-2 ">
                          <ul className="multi-column-dropdown">
                            <a href="/class8" className="dropdown-item">
                              Class 8
                            </a>
                            <a href="/class9" className="dropdown-item">
                              Class 9
                            </a>
                            <a href="/class10" className="dropdown-item">
                              Class 10
                            </a>
                          </ul>
                        </div>
                        <div className="col-sm-7 ">
                          <ul className="multi-column-dropdown">
                            <a href="/class11S" className="dropdown-item">
                              Class 11 (Science)
                            </a>
                            <a href="/class11C" className="dropdown-item">
                              Class 11 (Commerce)
                            </a>
                            <a href="/class12S" className="dropdown-item">
                              Class 12 (Science)
                            </a>
                            <a href="/class12C" className="dropdown-item">
                              Class 12 (Commerce)
                            </a>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item mr-auto ml-2">
                    <a
                      href="/exams"
                      className="dropdown-toggle nav-link mr-auto"
                      data-toggle="dropdown">
                      {" "}
                      EXAMS <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu multi-column columns-2">
                      <div className="row">
                        <div className="col-sm-4">
                          <ul className="multi-column-dropdown">
                            <a href="/" className="dropdown-item">
                              InCHO
                            </a>
                            <a href="/" className="dropdown-item">
                              NTSE
                            </a>
                            <a href="/" className="dropdown-item">
                              CBSE
                            </a>

                            <a href="/" className="dropdown-item">
                              BITSAT
                            </a>
                            <a href="/" className="dropdown-item">
                              NSTSE
                            </a>
                            <a href="/" className="dropdown-item">
                              NSO
                            </a>
                          </ul>
                        </div>
                        <div className="col-sm-5">
                          <ul className="multi-column-dropdown">
                            <Link to="/exams/JEEMain" className="dropdown-item active">
                              JEE MAIN
                            </Link>
                            <a href="/" className="dropdown-item">
                              JEE ADVANCED
                            </a>
                            <a href="/" className="dropdown-item">
                              NCERT SOL
                            </a>
                            <a href="/" className="dropdown-item">
                              IMO
                            </a>
                            <a href="/" className="dropdown-item">
                              SRMJEE
                            </a>
                            <a href="/" className="dropdown-item">
                              NSEJS
                            </a>
                          </ul>
                        </div>

                        <div className="col-sm-3">
                          <ul className="multi-column-dropdown mr-1">
                            <a href="/" className="dropdown-item">
                              RMO
                            </a>
                            <a href="/" className="dropdown-item">
                              NSO
                            </a>
                            <a href="/" className="dropdown-item">
                              ICSE
                            </a>
                            <Link to="/exams/NEET" className="dropdown-item active">
                              NEET
                            </Link>
                            <a href="/" className="dropdown-item">
                              KVPY
                            </a>
                            <a href="/" className="dropdown-item">
                              InPHO
                            </a>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <ul className="multi-column-dropdown"></ul>
                        </div>
                      </div>
                    </ul>
                  </li>

                  <li className="nav-item mr-auto ml-2">
                    <div className="dropdown">
                      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        {" "}
                        MORE <b className="caret"></b>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a href="/aboutus" className="dropdown-item">
                          AboutUs
                        </a>
                        <a href="/faq" className="dropdown-item">
                          FAQ's
                        </a>
                        <a href="/features" className="dropdown-item">
                          Features
                        </a>
                        <a href="/counselling" className="dropdown-item">
                          Counselling
                        </a>
                        <a href="/testim" className="dropdown-item">
                          Testimonials
                        </a>
                        <a href="/rankpredictor" className="dropdown-item">
                          RankPredictor
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item mr-auto ml-2">
                    <a className="nav-link " href="/pricing">
                      PRICING
                    </a>
                  </li>
                  <li className="nav-item mr-auto ml-2">
                    <a className="nav-link" href="https://missioned.in/blog/">
                      BLOG
                    </a>
                  </li>
                </ul>
              </Nav>
              <div className="Changealign">
                {currentUser !== null ? (
                  <Link to="/">
                    <button
                      className="btn login-btn mr-auto float-right ml-auto"
                      onClick={() => auth.signOut()}>
                      SignOut
                    </button>
                  </Link>
                ) : (
                  <Form inline className="mega-link p-2">
                    <Login />
                    {/* <Link to="/login" className="btn login-btn mr-2" role="button" style={{  width: 110 , height: 46 , textDecoration: "none" , borderRadius: "10px"}}>
                Login
              </Link> */}

                    <Register className="btn register-btn pr-2" />
                  </Form>
                )}
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(NavbarComponent);
