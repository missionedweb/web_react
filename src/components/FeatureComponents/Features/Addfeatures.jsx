import React from 'react';
import styled from "styled-components";
import './Addfeatures.css';
//import './Addfeatures.css';
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
          <header>
          <NavbarComponent className="ml-2"/>
      </header>
        
         <Wrapper>
          <div>
           <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p className="learning-headingmain">FEATURES</p>
                </div>
              </div>
            </div>
          </div>
<br /><br /><br /><br />
          
          <div className="container ct">
            <div className="row">
              <div
                className="col-md-7 col-12"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img1} style ={{marginRight: "600px" }} className = "img-section-left" alt="picture" />
              </div>
              <div
                className="col-md-5 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Expert Teachers</p>                
                <h6 className="learning-txt1" style={{ margin: "auto" }}>
            {" "}
            Our tier 1 Faculty who have experience of cracking one of the 
            toughest exams like JEE,NTSE  etc, so students would feel more connected and can ask doubts more freely
          </h6><br /><br />
                <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature3">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

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

          
          <div className="container ct">
            <div className="row">
              <div
                className="col-md-5 col-12 women1"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Engaging Assignments</p>                
                <h6 className="learning-txt" style={{ margin: "auto" }}>
            {" "}
            Daily package of randomly selected questions to test the student’s knowledge
            and polish the understanding of various concepts posted on the app for classes 8-12th.
          </h6><br /><br />
                  
                  <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature1">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

          </div>
                
              </div>
              <div
                className="col-md-7 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img2} className="img-section-right" alt="picture" />
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

          <div className="container ct">
            <div className="row">
              <div
                className="col-md-7 col-12 women3"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img3} className="img-section-left" alt="picture" />
              </div>
              <div
                className="col-md-5 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Trusted Content</p>                
                <h6 className="learning-txt" style={{ margin: "auto" }}>
            {" "}
            We make learning a fun session by not just involving the students in the course content but also, by allowing them to open their horizons and be aware about the world. The content is always 
            updated with the latest norms to ensure students are able to cope up with new challenges.
          </h6><br /><br />
                <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500" 
          >
            {" "}
            <a href="/feature6">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

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

          <div className="container ct">
            <div className="row">
              <div
                className="col-md-5 col-12"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Personalized Learning</p>                
                <h6 className="learning-txt" style={{ margin: "auto" }}>
            {" "}
            Provides students with an opportunity to study with the best mentors as well as gain insight on their performance. A study shows that 71.58% of students opt 
            for home tutors which proves the likeliness of students towards private mentors.          </h6><br /><br />
                <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature5">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

          </div>
              </div>
              <div
                className="col-md-7 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img4} className="img-section-right" alt="picture" />
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

          <div className="container ct">
            <div className="row">
              <div
                className="col-md-7 col-12 women1"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={img5} alt="picture" className="img-section-left"/>
              </div>
              <div
                className="col-md-5 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Live and Interactive</p>                

                <h6 className="learning-txt" style={{ margin: "auto" }}>
            {" "}
            Provides personalised attention by organising one-to-one doubt clearing sessions for the students which ensures a long term relationship 
            with students where they can ask anything and everything, any number of times.
          </h6><br /><br />
                <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature4">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

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

        <div className="container ml-auto mr-auto ctcon">
            <div className="row">
              <div
                className="col-md-5 col-12"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <p className="learning-heading">Convinient and Safe </p>                
                <h6 className="learning-txt" style={{ margin: "auto" }}>
            {" "}
            Providing education to the students at nominal price and at their comforts. The students can also 
            keep a track on their performance with the help of regular unbiased feedback.
          </h6><br /><br />
                <div
            className="col-md-6 b"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature2">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

          </div>
              </div>
              <div
                className="col-md-7 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={img6} className="img-section-right" alt="picture" />
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
      </Wrapper>
      </div>
  );
}

export default Addfeatures;

const Wrapper = styled.div`

  body {
    font-family: "Playfair Display", serif;
  }

  .jumbotron {
    background: #fff5e5;
    height: 200px;
    z-index : 1
    
  }
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    line-height: 80px;
    color: #202336;
  }

  .learning-headingmain{
    font-size: 80px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    padding-top: 20px;
    
  }

  
   .img-section-right {
    margin-right: -100px;
  }
  
  .b{
    margin-left: -15px;
  }

  .learn-more-btn{
    outline:none;
  }

  .learning-text {
    margin-right:-200px;
  }

  .get-app {
    margin-top:150px;
  }

  @media (max-width: 495px) {
    .live {
      margin-top: 10px;
    }
  }

  h3 {
    font-weight: bold;
  }

  h1 {
   
    font-family: "Playfair Display", serif;
    font-weight: bold;
    color: black;
    padding-bottom: 10%;
    padding-top: 4%;
    font-size: 65px;
  }

  .women1 img
  {
    margin-left: -50px; 
    height: auto;
    margin-top: 80px; 
    width: 500px;
  }

  
.learning-txt1{
  
 font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 30px;
  color: #000000;
  text-align: justify;
  text-justify: inter-word;
  
}
  .women2 img
  {
    margin-left: 300px; 
    height: auto;
    width: 500px;
    margin-right: -60px;

  }
   

   @media only screen and (max-width: 800px) {

    .ct {
      margin-top:-50px
    }

    .ctcon {
      margin-top:-50px;
      margin-bottom:-350px;
    }

    .learning-headingmain{
      padding-top:50px;
    }


  .counselling{
    margin-top: -200px;
    margin-bottom:100px;
  }

  .get-app{
    margin-top:200px;
  }
  @media (max-width: 900px) {
    .img-section-right {
      display: none;
    }
    .img-section-left {
      display: none;
    }
  }
}
`



