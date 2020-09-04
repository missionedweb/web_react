import React, { useContext } from "react";
import NavigationLogo from "../Images/NavigationLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import AOS from "aos";


AOS.init();
const NavbarComponent = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div id="header">
      <div class="row">
      <Navbar center bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img className="logo mt-n4" src={NavigationLogo} alt="logo" />
          <span className="missioned-nav font-weight-bold">
            Mission<span className="ed">Ed</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <ul>
              {/* <li>
            <Nav.Link href="/" className="linkname">Home</Nav.Link>
              </li> */}
              <li>
        <a href="/">Home</a>
        
      </li>
              
      <li>
        <a href="">Classes</a>
        <ul class="mega-dropdown">
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
        <ul class="mega-dropdown">
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
      <li>
      <a href="/pricing"> PRICING</a>
      </li>
      <li>
      <a href="/https://missioned.in/blog/">BLOG</a>
      </li>
              
    </ul> 
            
            {/* <NavDropdown title="Classes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="link">Class 8</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="link">Class 9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="link">Class 10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="link">
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
            <Nav.Link href="https://missioned.in/blog/">Blog</Nav.Link> */}
          </Nav>
          {currentUser !== null ? (
            <Link to="/dashboard">
              <div>
                <div className="name-user px-3 py-2 text-center font-weight-bold align-self-center nav-item d-none d-sm-block">
                  {currentUser.displayName.slice(0, 1)}
                </div>
              </div>
            </Link>
          ) : (
            <Form inline>
              <Link to="/login">
                {" "}
                <a className="btn login-btn mr-2" href="#" role="button">
                  Login
                </a>
              </Link>
              <Link to="/register">
                <a className="btn register-btn" href="#" role="button">
                  Register
                </a>
              </Link>
            </Form>
          )}
        </Navbar.Collapse>
      </Navbar>
      </div>
      </div>
    </>
  );
};

export default NavbarComponent;
