import React from 'react';
import styled from "styled-components";
//import './Addfeatures.css';
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
const Addfeatures=()=> {
  return (
        <div>
          <Wrapper>
            <div>
              <header>
              <NavbarComponent className="ml-2"/>
              </header>
              <br /><br /><br /><br />
              <div>
              <div className="jumbotron">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-lg-12"data-aos="fade-right"data-aos-duration={1000}style={{ margin: "auto" }}>
                      <h1 className="live">Features</h1>
                    </div>
                  </div>
                </div>
              </div>
          <br /><br />

          <div className="container sp">
            <div className="row">
              <div className="col-md-8 col-12 women1" data-aos="fade-down"data-aos-duration={1000} style={{ margin: "auto" }}>
                <img src={img1}  alt="picture" /></div>
              <div className="col-md-4 col-12" data-aos="fade-up" data-aos-duration={1500} style={{ margin: "auto" }}>
                <h3 className="above1">Expert Teachers</h3><br /><br />
                <p className="abovep">
                  Our tier 1 Faculty who have experience of cracking one of the 
                  toughest exams like JEE,NTSE etc, 
                  so students would feel more connected and can ask doubts more freely.</p>
                
                <br /><br /><br />
                  <div
                  className="col-md-6 btnex"
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <div className="container sp">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className="above">Engaging Assignments</h3><br /><br />
                <p className=" abovep">
                  Daily package of randomly selected questions to test the 
                  student’s knowledge and polish the understanding of various concepts 
                  posted on the app for classes 8-12th.</p>
                <br /><br /><br /><br />
                        <div className="col-md-6 btnen" data-aos="zoom-in-up" data-aos-duration="1500">
                          {" "}
                          <a href="/feature1">
                          <button className="border-0 learn-more-btn">Learn More</button>{" "}
                          </a>
                        </div>
              </div>
              <div
                className="col-md-8 col-12 women2 ">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container sp1">
            <div className="row">
              <div
                className="col-md-8 col-12 women1">
                <img src={img3} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" above1">Trusted Content</h3><br /><br />
                <p className=" abovep">
                  We make learning a fun session by not just involving the students 
                  in the course content but also, by allowing them to open their horizons 
                  and be aware about the world. The content is always updated with the latest 
                  norms to ensure students are able to cope up with new challenges.</p>
                  <br />
                    <div className="col-md-6 btnex" data-aos="zoom-in-up" data-aos-duration="1500">
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
          <br />
          <br />

          <div className="container sp">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className="above">Personalised Learning </h3><br /><br />
                <p className="abovep">
                  Provides students with an opportunity to study with the best mentors as 
                  well as gain insight on their performance. A study shows that 71.58% of 
                  students opt for home tutors which
                   proves the likeliness of students towards private mentors.</p>
                  <br /><br /><br />
                <div className="col-md-6 btnen" data-aos="zoom-in-up" data-aos-duration="1500">
                    {" "}
                    <a href="/feature5">
                    <button className="border-0 learn-more-btn">Learn More</button>{" "}
                    </a>
                </div>
              </div>
              <div
                className="col-md-8 col-12 women2">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container sp1">
            <div className="row">
              <div
                className="col-md-8 col-12 women1">
                <img src={img5} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" above1">Live & Interactive</h3><br /><br />
                <p className=" abovep">
                  Provides personalised attention by organising one-to-one doubt clearing 
                  sessions for the students which ensures a long term relationship 
                  with students where they can ask anything and everything, any number of times.
                  </p>
                  <br /><br />
                <div className="col-md-6 btnex" data-aos="zoom-in-up" data-aos-duration="1500">
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
          <br />
          <br />
          <div className="container sp">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" above">Convinient and safe</h3><br /><br />
                <p className="abovep">
                  Providing education to the students at nominal price and at their comforts.
                   The students can also keep a track on their performance with the help of 
                   regular unbiased feedback.</p>
                <br /><br /><br />
                <div
                className="col-md-6 btnen"
                data-aos="zoom-in-up"
                data-aos-duration="1500">
                    {" "}
                    <a href="/feature2">
                    <button className="border-0 learn-more-btn">Learn More</button>{" "}
                    </a>
                </div>
              </div>
              <div
                className="col-md-8 col-12 women2 ">
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
    height: 150px;
    top: 24.41%;
    bottom: 51.17%;
    text-align: center;
    background:linear-gradient(297.17deg, #FFEDBA 6.67%, #EE4D47 91.82%); 
  }

  h3 {
    font-weight: bold;
  }

  #h1{
      background: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
      width: 100%;
      height: 20vh;
      position: relative;
  }

  h1 {
    position: relative;
    font-family: "Playfair Display", serif;
    font-weight: bold;

    letter-spacing: calc(0.5em+1vh);
    line-height: calc(1em+0.75vh);
    color: black;
    padding-bottom: 10%;
    font-size: 70px;
  }
  
  .image-background{
    background-color: #FFFBEF;
  }

  .banner
  {
    margin-top: 10%;
  }

  .live
  {
    margin-top: -35px;
  }

  .abovep
  {
    text-align: justify;
  }

  .women1 img
  {
    margin-left: 50px; 
    height: auto;
    width: 500px;
  }
  
  .women2 img
  {
    margin-left: 200px; 
    height: auto;
    width: 500px;
  }

   @media only screen and (max-width: 800px) {
    h1{
    padding-top: 10%;
    font-size: calc(2rem + 3vw);
  }
  .live
  {
    margin-top: 15px;
  }
  #h1{
      height: 20vh;
  }
  .women2, .women3, .women1{
   display: none;
  }

  .sp {
    margin-bottom: -200px;
  }

  .sp1 {
    margin-botttom: -300px;
  }

 

}
`