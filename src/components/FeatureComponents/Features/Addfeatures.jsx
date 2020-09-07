import React from 'react';
import './Addfeatures.css';
import img1 from "./Images/img1.svg";
import img2 from "./Images/img2.svg";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.svg";
import img5 from "./Images/img5.svg";
import img6 from "./Images/img6.svg";
import { Button } from 'react-bootstrap';
import NavbarComponent from "../../NavbarComponent";
import GetTheApp from "../../GetTheApp";
import Footer from "../../Footer";


function Addfeatures() {
  return (
        <div>
        <NavbarComponent />
            <div>
           <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="live"> Features</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="features ">
              <div className="container ">
                <div className="row"></div>
              </div>
            </div>
        
          <br />
          <br />
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-12"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img1} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <h3 className=" above1">Expert Teachers</h3>
                <p style={{float: "right"}}className=" abovep">
                  Our tier 1 Faculty who have experience of cracking one of the toughest exams 
                  like JEE, NTSE etc, 
                  so students would feel more connected and can ask doubts more freely
                </p>
                <div>
                  <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12 women1"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <h3 className=" above ">Engaging Assignments</h3>
                <p className=" abovep">
                  Daily package of randomly selected questions to test the student’s knowledge 
                  and polish the understanding of various concepts posted on the app for classes 8-12th
                  
                  <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
                </p>
              </div>
              <div
                className="col-md-8 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img2} alt="picture" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container banner">
            <div className="row">
              <div
                className="col-md-8 col-12 women3"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img3} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <h3 className=" above1">Trusted Content</h3>
                <p className=" abovep">
                  The environment of learning we provide is nurtured by the experts. 
                  The guidance that you are seeking is from the IITians. 
                  They will provide you the enhanced way of teaching with the pinch of fun and enthusiasm. 
                  You will get the quality as well as playful atmosphere.
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <h3 className=" above ">Personalized Learning</h3>
                <p className=" abovep">
                  Provides students with an opportunity to study with the best mentors as well as 
                  gain insight on their performance. A study shows that 71.58% of students opt for home tutors 
                  which proves the likeliness of students towards private mentors.
                  <br /><br />
                  <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
                </p>
              </div>
              <div
                className="col-md-8 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img4} alt="picture" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container banner">
            <div className="row">
              <div
                className="col-md-8 col-12 women3"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img5} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <h3 className=" above1">Live and Interactive</h3>
                <p className=" abovep">
                  Provides personalised attention by organising one-to-one doubt clearing sessions 
                  for the students which ensures a long term relationship with students 
                  where they can ask anything and everything, any number of times.
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <h3 className=" above ">Convinient and Safe</h3>
                <p className=" abovep">
                  Studying is hard? But it doesn’t have to be that way. 
                  At MissionEd we believe in making learning fun. With our specially 
                  crafted notes and assignments every child is bound to fall in love with learning.
                  <br /><br />


                  <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  style={{ outline: "none", marginLeft: "20px", background: "#FB8F1D", color: "white" }}>
                  Read More
                </Button>
                </p>
              </div>
              <div
                className="col-md-8 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img6} alt="picture" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
      <GetTheApp/>
      <Footer/>
      </div>
  );
}

export default Addfeatures;


