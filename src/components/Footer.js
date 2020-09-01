import React from "react";

const Footer = () => {
  return (
    <div>
 <br></br>
          <footer className="footer-section">
            <div className="container" data-aos="zoom-in" data-aos-duration={1000}>
              <div className="footer-cta pt-5 pb-5">
                <div className="row">
                  <div className="col-xl-5 col-md-4 mb-30 footer-info ">
                    <div className="single-cta">
                      <i className="fas fa-map-marker-alt" />
                      <div className="cta-text">
                        <h4>Find us</h4>
                        <span>Goa Institute of Management, Goa, 202010</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30 footer-info">
                    <div className="single-cta">
                      <i className="fas fa-phone" />
                      <div className="cta-text">
                        <h4>Call us</h4>
                        <span>+91-9674037142</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-4 mb-30 ">
                    <div className="single-cta">
                      <i className="far fa-envelope-open" />
                      <div className="cta-text">
                        <h4>Mail us</h4>
                        <span>missioned@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-content pt-5 pb-5">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                      <div className="footer-logo">
                      </div>
                      <div className="footer-text">
                        <p> Welcome to MissionEd <br />Learning Platform For Classes 8th - 12th</p>
                      </div>
                      <div className="footer-social-icon footer-info">
                        <span>Follow us</span>
                        <a href="https://www.facebook.com/MissionEd2020/"><i className="fab fa-facebook-f social-links " /></a>
                        <a href="https://www.instagram.com/mission_ed/"><i className="fab fa-instagram social-links" /></a>                            
                        <a href="https://www.linkedin.com/company/missioned"><i className="fab fa-linkedin social-links" /></a>                           
                        <a href="https://missioned.in/blog/"><i className="fas fa-blog social-links " /></a> 
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3>Useful Links</h3>
                      </div>
                      <ul>
                      <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="/contactus">Contact</a></li>
                              <li><a href="https://missioned.in/blog/">Blogs</a></li>
                              <li><a href="/feature3">Expert Team</a></li>
                              <li><a href="/feature6">Why MissionEd Works</a></li>
                
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30 ">
                    <div className="footer-widget">
                      <div className="footer-widget-heading footer-info">
                        <h3>Classes </h3>
                      </div>
                      <ul>
                        <li><a href="#">Class 8</a></li>
                        <li><a href="#">Class 12 Science</a></li>
                        <li><a href="#">Class 9</a></li>
                        <li><a href="#">Class 12 Commerce</a></li>
                        <li><a href="#">Class 10</a></li>
                        <li><a href="#">CBSE Board</a></li>
                        <li><a href="#">Class 11 Science</a></li>
                        <li><a href="#">ICSE Board</a></li>
                        <li><a href="#">Class 11 Commerce</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                      <p>Copyright © 2020, All Right Reserved <a href="/">MissionEd</a></p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="/contactus">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default Footer;
