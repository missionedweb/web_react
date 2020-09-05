import React from "react";
import NavigationLogo from "../Images/NavigationLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import Register from "../pages/auth/register/register";
import $ from 'jquery';



function NavbarComponent({ currentUser }) {
  return (
    <>
    
      <div id="header">
      <div class="row">
      <Navbar center bg="dark" expand="xl" className="navbar-expand-xl">
        <Navbar.Brand href="#home">
          <img className="logo mt-n4" src={NavigationLogo} alt="logo" />
          <span className="missioned-nav font-weight-bold">
            Mission<span className="ed">Ed</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-left">
          <Nav className="navbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="/" class="nav-link">Home</a>
        
                 </li>
                 
                <li class="nav-item dropdown menu-area">
                  <a class="nav-link dropdown-toggle" href="#" id="mega-one"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Classes
                  </a>
                  <div class="dropdown-menu mega-area" aria-labelledby="mega-one">
                   <div class="row">
                     <div class="col-sm-4">
                       <a href="#" class="dropdown-item">Class 8</a>
                       <a href="#" class="dropdown-item">Class 9</a>
                     </div>
                     <div class="col-sm-4">
                      <a href="#" class="dropdown-item">Class 10</a>
                      <a href="#" class="dropdown-item">Class 11 Science</a>
                      <a href="#" class="dropdown-item">Class 12 Science</a>
                    </div>
                    <div class="col-sm-4">
                      <a href="#" class="dropdown-item">Class 11 Commerece</a>
                      <a href="#" class="dropdown-item">Class 12 Commerece</a>
                    </div>
                    
                   </div>
                  </div>
                </li>
                <li class="nav-item dropdown menu-area">
                  <a class="nav-link dropdown-toggle" href="#" id="mega-two"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Portfolio
                  </a>
                  <div class="dropdown-menu mega-area" aria-labelledby="mega-two">
                   <div class="row">
                     <div class="col-sm-6 col-lg-3">
                       <a href="#" class="dropdown-item">NEET</a>
                       <a href="#" class="dropdown-item">NTSE</a>
                       <a href="#" class="dropdown-item">CBSE</a>
                       <a href="#" class="dropdown-item">ICSE</a>
                       <a href="#" class="dropdown-item">BITSAT</a>  
                     </div>
                     <div class="col-sm-6 col-lg-3">
                      <a href="#" class="dropdown-item">JEE MAINS</a>
                      <a href="#" class="dropdown-item">JEE ADVANCED</a>
                      <a href="#" class="dropdown-item">NCERT SOL</a>
                      <a href="#" class="dropdown-item">IMO</a>
                      <a href="#" class="dropdown-item">SRMJEE</a>
                     </div>  
                    <div class="col-sm-6 col-lg-3">
                      <a href="#" class="dropdown-item">KVPY</a>
                      <a href="#" class="dropdown-item">NSEJS</a>
                      <a href="#" class="dropdown-item">NSO</a>
                      <a href="#" class="dropdown-item">InPHO</a>
                      
                    </div>
                    <div class="col-sm-6 col-lg-3">
                      <a href="#" class="dropdown-item">InCHO</a>
                      <a href="#" class="dropdown-item">RMO</a>
                      <a href="#" class="dropdown-item">NSO</a>
                      <a href="#" class="dropdown-item">NSTSE</a>
                     
                    </div>
                   </div>
                  </div>
                </li>
                <li class="nav-item dropdown menu-area">
                  <a class="nav-link dropdown-toggle" href="#" id="mega-three"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MORE
                  </a>
                  <div class="dropdown-menu mega-area" aria-labelledby="mega-three">
                   <div class="row">
                     <div class="col-sm-6 col-lg-3">
                       <a href="#" class="dropdown-item">About Us</a>
                       <a href="#" class="dropdown-item">FAQ's</a>
                     </div>
                     <div class="col-sm-6 col-lg-3">
                      <a href="#" class="dropdown-item">Features</a>
                      <a href="#" class="dropdown-item">Counselling</a>
                     </div>  
                    <div class="col-sm-6 col-lg-3">
                      <a href="#" class="dropdown-item">Testimonials</a>
                      
                    </div>
                    <div class="col-sm-6 col-lg-3">
                     
                    </div>
                   </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/pricing">PRICING</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/https://missioned.in/blog/">BLOG</a>
                </li>
              </ul>
          </Nav>
          {currentUser !== null ? (
            <Link to="/login" >
              <button className="btn login-btn mr-auto float-right ml-auto" onClick={() => auth.signOut()}>
                SignOut
              </button>
            </Link>
          ) : (
            <Form inline className="mega-link p-2" >
              <Link to="/login" className="btn login-btn mr-2" role="button">
                Login
              </Link>
              <Register className="mr-2 p-2" />
            </Form>
          )}
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
