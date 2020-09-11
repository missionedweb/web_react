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
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <>
    
      <div id="header" className="fixed-top" style={{boxShadow:"1px 1px 10px 1px black"}}>
      <div class="row">
      <Navbar center bg="white" expand="xl" className="navbar-expand-xl ">
        <Navbar.Brand href="#home" className="ml-8">
          <img className="logo mt-n4 mr-auto" src={NavigationLogo} alt="logo" />
          <span className="missioned-nav font-weight-bold">
            Mission<span className="ed">Ed</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-left">
          <Nav className="navbar transparent ml-auto mr-auto">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item mr-auto ml-2">
                  <a href="/" class="nav-link">Home</a>
        
                 </li>
                 <li class="nav-item mr-auto ml-2">
	            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"> Classes <b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-2">
		            <div class="row">
			            <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="/class8" class="dropdown-item">Class 8</a>
                    <a href="#" class="dropdown-item">Class 9</a>
					            
				            </ul>
			            </div>
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
                      <a href="#" class="dropdown-item">Class 10</a>
                      <a href="#" class="dropdown-item">Class 11 Science</a>
                      <a href="#" class="dropdown-item">Class 12 Science</a>
				            </ul>
			            </div>
                  <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
                      <a href="#" class="dropdown-item">Class 11 Comm</a>
                      <a href="#" class="dropdown-item">Class 12 Comm</a>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>
          <li class="nav-item mr-auto ml-2">
	            <a href="#" class="dropdown-toggle nav-link mr-auto" data-toggle="dropdown"> STUDY MATERIALS <b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-2">
		            <div class="row">
			            <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">NEET</a>
                       <a href="#" class="dropdown-item">NTSE</a>
                       <a href="#" class="dropdown-item">CBSE</a>
                       <a href="#" class="dropdown-item">ICSE</a>
                       <a href="#" class="dropdown-item">BITSAT</a>
					            
				            </ul>
			            </div>
			            <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">JEE MAINS</a>
                      <a href="#" class="dropdown-item">JEE ADVANCED</a>
                      <a href="#" class="dropdown-item">NCERT SOL</a>
                      <a href="#" class="dropdown-item">IMO</a>
                      <a href="#" class="dropdown-item">SRMJEE</a>
				            </ul>
			            </div>
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">KVPY</a>
                      <a href="#" class="dropdown-item">NSEJS</a>
                      <a href="#" class="dropdown-item">NSO</a>
                      <a href="#" class="dropdown-item">InPHO</a>
				            </ul>
			            </div>
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">InCHO</a>
                      <a href="#" class="dropdown-item">RMO</a>
                      <a href="#" class="dropdown-item">NSO</a>
                      <a href="#" class="dropdown-item">NSTSE</a>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>

          <li class="nav-item mr-auto ml-2">
	            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"> MORE <b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-2">
		            <div class="row">
			            <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="/aboutus" class="dropdown-item">About Us</a>
                    <a href="#" class="dropdown-item">Testimonials</a>
                    
					            
				            </ul>
			            </div>
			            <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="/features" class="dropdown-item">Features</a>
                     
				            </ul>
			            </div>
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">Counselling</a>
				            </ul>
			            </div>
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    <a href="#" class="dropdown-item">FAQ's</a>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>
                
                
               
                <li class="nav-item mr-auto ml-2">
                  <a class="nav-link " href="/pricing">PRICING</a>
                </li>
                <li class="nav-item mr-auto ml-2">
                  <a class="nav-link" href="/https://missioned.in/blog/">BLOG</a>
                </li>
              </ul>
          </Nav>
          <div class="ml-auto">
          {currentUser !== null ? (
            <Link to="/login" >
              <button className="btn login-btn mr-auto float-right ml-auto" onClick={() => auth.signOut()}>
                SignOut
              </button>
            </Link>
          ) : (
            <Form inline className="mega-link p-2" >
              <Link to="/login" className="btn login-btn mr-2" role="button" style={{  width: 110 , height: 46 , textDecoration: "none" , borderRadius: "10px"}}>
                Login
              </Link>
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
