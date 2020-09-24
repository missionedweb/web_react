import React from "react";
import NavigationLogo from "../Images/NavigationLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import Register from "../pages/auth/register/register";
import Login from "../pages/auth/login/login";

import $ from 'jquery';



function NavbarComponent({ currentUser }) {
  // window.addEventListener("scroll", function () {
  //   let header = document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 150);
  // });
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
  });
  return (
    <>
    
      <div id="header" className="fixed-top" >
      <div class="row">
      <Navbar center  expand="xl" className="navbar-expand-xl navbar-default" >
        <Navbar.Brand href="/" className="ml-8">
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
			            <div class="col-sm-4 ml-2 " >
				            <ul class="multi-column-dropdown">
                    <a href="/class8" class="dropdown-item">Class 8</a>
                    <a href="/class9" class="dropdown-item">Class 9</a>
                    <a href="/class10" class="dropdown-item">Class 10</a>
				            </ul>
			            </div>
			            <div class="col-sm-7 ">
				            <ul class="multi-column-dropdown">
                      
                      <a href="/class11S" class="dropdown-item">Class 11 Science</a>
                      <a href="/class11C" class="dropdown-item">Class 11 Commerce</a>
                      <a href="/class12S" class="dropdown-item">Class 12 Science</a>
                      <a href="/class12C" class="dropdown-item">Class 12 Commerce</a>
				            </ul>
			            </div>
                  
		            </div>
	            </ul>
	        </li>
          <li class="nav-item mr-auto ml-2">
	            <a href="#" class="dropdown-toggle nav-link mr-auto" data-toggle="dropdown"> STUDY MATERIALS <b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-2">
		            <div class="row">
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
                   
                    <a href="/" class="dropdown-item">InCHO</a>
                       <a href="/" class="dropdown-item">NTSE</a>
                       <a href="/" class="dropdown-item">CBSE</a>
                       
                       <a href="/" class="dropdown-item">BITSAT</a>
                       <a href="/" class="dropdown-item">NSTSE</a>
                       <a href="/" class="dropdown-item">NSO</a>
                      
					            
				            </ul>
			            </div>
			            <div class="col-sm-5">
				            <ul class="multi-column-dropdown">
                    <a href="/" class="dropdown-item">JEE MAINS</a>
                      <a href="/" class="dropdown-item">JEE ADVANCED</a>
                      <a href="/" class="dropdown-item">NCERT SOL</a>
                      <a href="/" class="dropdown-item">IMO</a>
                      <a href="/" class="dropdown-item">SRMJEE</a>
                      <a href="/" class="dropdown-item">NSEJS</a>
                      
                      
				            </ul>
			            </div>
                  
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown mr-1">
                    
                      <a href="/" class="dropdown-item">RMO</a>
                      <a href="/" class="dropdown-item">NSO</a>
                      <a href="/" class="dropdown-item">ICSE</a>
                      <a href="/" class="dropdown-item">NEET</a>
                      <a href="/" class="dropdown-item">KVPY</a>
                      <a href="/" class="dropdown-item">InPHO</a>
                      
				            </ul>
			            </div>
                  <div class="col-sm-3">
				            <ul class="multi-column-dropdown">
                    
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>

          
                <li class="nav-item mr-auto ml-2">
                <div class="dropdown">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"> MORE <b class="caret"></b></a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="/aboutus" class="dropdown-item">AboutUs</a>
                <a href="/faq" class="dropdown-item">FAQ's</a>
                <a href="/features" class="dropdown-item">Features</a>
                <a href="/counselling" class="dropdown-item">Counselling</a>
                <a href="/testim" class="dropdown-item">Testimonials</a>
                </div>
                </div>
                </li>
                
               
                <li class="nav-item mr-auto ml-2">
                  <a class="nav-link " href="/pricing">PRICING</a>
                </li>
                <li class="nav-item mr-auto ml-2">
                  <a class="nav-link" href="https://missioned.in/blog/">BLOG</a>
                </li>
              </ul>
          </Nav>
          <div class="Changealign">
          {currentUser !== null ? (
            <Link to="/" >
              <button className="btn login-btn mr-auto float-right ml-auto" onClick={() => auth.signOut()}>
                SignOut
              </button>
            </Link>
          ) : (
            <Form inline className="mega-link p-2" >
              <Login/>
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
