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
      <Navbar center bg="dark" expand="lg" className="navbar-expand-xl">
        <Navbar.Brand href="#home">
          <img className="logo mt-n4" src={NavigationLogo} alt="logo" />
          <span className="missioned-nav font-weight-bold">
            Mission<span className="ed">Ed</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-left">
          <Nav className="mr-auto mb-2">

            <ul>
              <li className="mega-link">
        <a href="/">Home</a>
        
      </li>
              
      <li>
        <a href="">Classes</a>
        <ul class="mega-dropdown mr-auto">
          <li class="row">
            <ul class="mega-col">
              <li><Nav.Link href="#action/3.1" className="link">Class 8</Nav.Link></li>
              <li><Nav.Link href="#action/3.2" className="link">Class 9</Nav.Link></li>
            </ul>
            <ul class="mega-col">
              <li><Nav.Link href="#action/3.3" className="link">Class 10</Nav.Link></li>
              <li><Nav.Link href="#action/3.4" className="link">Class 11 Science</Nav.Link></li>
              <li><Nav.Link href="#action/3.5" className="link">Class 12 Science</Nav.Link></li>
            </ul>
            <ul class="mega-col">
              <li><Nav.Link href="#action/3.6" className="link">Class 11 Commerce</Nav.Link></li>
              <li><Nav.Link href="#action/3.7" className="link">Class 12 Commerce</Nav.Link></li>
            </ul>
            
          </li>
        </ul>        
      </li>
      <li>
        <a href="">STUDY MATERIALS</a>
        <ul class="mega-dropdown mr-auto">
          <li class="row">
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">NEET</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NTSE</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">CBSE</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">ICSE</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">JEE MAINS</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">JEE ADVANCED</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NCERT SOL</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">IMO</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">KVPY</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NSEJS</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NSO</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">InPHO</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">InCHO</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">RMO</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NSO</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">NSTSE</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">BITSAT</Nav.Link></li>
              <li><Nav.Link href="#action/3.1" className="link">SRMJEE</Nav.Link></li>
            </ul>
            
          </li>
        </ul>        
      </li>
      <li>
        <a href="">MORE</a>
        <ul class="mega-dropdown">
          <li class="row">
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">About Us</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">Features</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">Testimonials</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">Counselling</Nav.Link></li>
            </ul>
            <ul class="mega-col1">
              <li><Nav.Link href="#action/3.1" className="link">FAQ's</Nav.Link></li>
            </ul>
            
          </li>
        </ul>        
      </li>
      <li className="mega-link">
      <a href="/pricing" className="float-left"> PRICING</a>
      </li>
      <li className="mega-link">
      <a href="/https://missioned.in/blog/">BLOG</a>
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
            <Form inline className="p-2" >
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
