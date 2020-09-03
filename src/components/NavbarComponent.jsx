import React, { useContext } from 'react';
import NavigationLogo from '../Images/NavigationLogo.svg';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import AOS from 'aos';

AOS.init();
const NavbarComponent = () => {
  return (
    <React.Fragment>
      <Navbar center expand="lg" data-aos="zoom-out" data-aos-duration="1000">
        <Navbar.Brand href="#home">
          <img className="logo mt-n4" src={NavigationLogo} alt="logo" />
          <span className="missioned-nav font-weight-bold">
            Mission<span className="ed">Ed</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Classes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Class 8</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Class 9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Class 10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Class 11 Science
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Class 11 Commerce
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Class 12 Science
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Class 12 Commerce
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Study Materials" id="basic-nav-dropdown">
              <NavDropdown.Item>NEET</NavDropdown.Item>
              <NavDropdown.Item>JEE MAINS</NavDropdown.Item>
              <NavDropdown.Item>JEE ADVANCE</NavDropdown.Item>
              <NavDropdown.Item>NCERT SOL</NavDropdown.Item>
              <NavDropdown.Item>NTSE</NavDropdown.Item>
              <NavDropdown.Item>KVPY</NavDropdown.Item>
              <NavDropdown.Item>NSEJS</NavDropdown.Item>
              <NavDropdown.Item>CBSE</NavDropdown.Item>
              <NavDropdown.Item>ICSE</NavDropdown.Item>
              <NavDropdown.Item>IMO</NavDropdown.Item>
              <NavDropdown.Item>NSO</NavDropdown.Item>
              <NavDropdown.Item>InPHO</NavDropdown.Item>
              <NavDropdown.Item>InCHO</NavDropdown.Item>
              <NavDropdown.Item>RMO</NavDropdown.Item>
              <NavDropdown.Item>NSTSE</NavDropdown.Item>
              <NavDropdown.Item>BITSAT</NavDropdown.Item>
              <NavDropdown.Item>SRMJEE</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/feature4">Features</NavDropdown.Item>
              <NavDropdown.Item href="/testim">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="/counselling">
                Counselling
              </NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ's</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="https://missioned.in/blog/">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarComponent;

// {currentUser !== null ? (
//             <Link to="/dashboard">
//               <div>
//                 <div className="name-user px-3 py-2 text-center font-weight-bold align-self-center nav-item d-none d-sm-block">
//                   {currentUser.displayName.slice(0, 1)}
//                 </div>
//               </div>
//             </Link>
//           ) : (
//             <Form inline>
//               <Link to="/login">
//                 {" "}
//                 <a className="btn login-btn mr-2" href="#" role="button">
//                   Login
//                 </a>
//               </Link>
//               <Link to="/register">
//                 <a className="btn register-btn" href="#" role="button">
//                   Register
//                 </a>
//               </Link>
//             </Form>
//           )}
