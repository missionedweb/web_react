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



function Addfeatures() {
  return (
        <div>
          <NavbarComponent className="ml-2"/>
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
                <div className="col-md-12 col-lg-12 col-sm-6"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
                >
                  <h1 className="head">Features</h1>
                </div>
              </div>
            </div>
          </div>
          <br />

         

            <div className="features ">
              <div className="container ">
                <div className="row"></div>
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
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-12 women1"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
                >
                <img src={img1} style ={{marginRight: "600px"}} className = "img-section-left" alt="picture" />
              </div>
              <div className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
                >
                <h3 className="hedex">Expert Teachers</h3><br /><br />
               <p className="pex">
                  Our tier 1 Faculty who have experience of cracking one of the 
                  toughest exams like JEE,NTSE etc, 
                  so students would feel more connected and can ask doubts more freely
          
                </p>
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
          
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className="heden">Engaging Assignments</h3><br /><br />
                <p className=" peng">
                  Daily package of randomly selected questions to test the 
                  student’s knowledge and polish the understanding of various concepts 
                  posted on the app for classes 8-12th.
         
                </p>
                <br /><br /><br /><br />
                        <div
                        className="col-md-6 btnen"
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
                className="col-md-8 col-12 women2 ">
                <img src={img2} style ={{marginLeft: "600px"}} className = "img-section-right" alt="picture" />
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
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-12 women1">
                <img src={img3} style ={{marginRight: "600px"}} className = "img-section-left"alt="picture" />
              </div>
              <div
                className="col-md-4 col-12 women1"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" hedt">Trusted Content</h3><br /><br />
                <p className=" ptrusted">
                  We make learning a fun session by not just involving the students 
                  in the course content but also, by allowing them to open their horizons 
                  and be aware about the world. The content is always updated with the latest 
                  norms to ensure students are able to cope up with new challenges.
                  </p>

                          <br />
                        <div
                    className="col-md-6 btntr"
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
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className="heden">Personalised Learning </h3><br /><br />
                <p className="peng">
                  Provides students with an opportunity to study with the best mentors as 
                  well as gain insight on their performance. A study shows that 71.58% of 
                  students opt for home tutors which
                   proves the likeliness of students towards private mentors.
         
                </p>
                <br /><br /><br />
                        <div
                    className="col-md-6 btnen"
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
                className="col-md-8 col-12 women2 ">
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
<div className="container">
            <div className="row">
              <div
                className="col-md-8 col-12 women1">
                <img src={img5} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12 women1"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" hedt">Live & Interactive</h3><br /><br />
                <p className=" plive">
                  Provides personalised attention by organising one-to-one doubt clearing 
                  sessions for the students which ensures a long term relationship 
                  with students where they can ask anything and everything, any number of times.
                  </p>

                          <br /><br />
                        <div
                    className="col-md-6 btnlive"
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
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12" 
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}>
                <h3 className=" heden">Convinient and safe</h3><br /><br />
                <p className=" peng">
                  Providing education to the students at nominal price and at their comforts.
                   The students can also keep a track on their performance with the help of 
                   regular unbiased feedback.
          
         
                </p>
                <br /><br /><br />
                        <div
                    className="col-md-6 btnen"
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
           <GetTheApp/>
      <Footer/>
      </Wrapper>
    </div>
  );
};

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
    font-size: 40px;
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
  
  .head {
    margin-top: -33px;
    font-size: 80px;
  }

  .hedex{
    margin-top: -55%;
    font-size: 35px;
    margin-left: -30%;
  }
  .pex {
    text-align: left;
    text-align: justify;
    margin-left: -30%;

  }

  .btnex {
    margin-left: -33%;
    margin-bottom: -400%;

  }

  .heden {
    font-size: 30px;
    font-weight:bold;
    margin-top: 30%;
    margin-left: -30%;
  }

  .peng {
    text-align: left;
    text-align: justify;
    margin-left: -30%;

  }

  .btnen {
    margin-left: -35%;
    margin-top: -10%;

}

  .hedt{
      margin-top: 10%;
      font-size: 35px;
      margin-left: -20%;
    }

  .ptrusted {
    text-align: left;
    text-align: justify;
    margin-left: -20%;

  }

  .btntr {
    margin-left: -25%;
  }

  .plive {
    text-align: left;
    text-align: justify;
    margin-left:-20%;
  }

  .btnlive {
      margin-left: -25%;
  }

  .main-para {
    opacity: 0.5;
  }
 
  .women1 img {
    margin-left: -15%;
    margin-right: 600px;
    width: 500px;
  }

  .women2 img {
    margin-left: 280px;
    height: auto;
    width: 500px;
  }

  .women3 img {
    margin-left: -15%;
    height: auto;
    width: 500px;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      padding-top: 10%;
      font-size: calc(2rem + 3vw);
    }
    .live {
      margin-top: 15px;
    }
    #h1 {
      height: 20vh;
    }
    .women2,
    .women3,
    .women1 {
      display: none;
    }
    


    @media only screen and (max-width: 800px) {

      .hedex{
      margin-top: -55%;
      font-size: 34px;
      margin-left: -2%;
  }

  .pex {
    
    margin-left: -2%;

  }
  .btnex {
    margin-left: -2%;
    

  }

  .heden {
    
    margin-left: -2%;
    font-size: 34px;
  }

  .peng {
    
    margin-left: -2%;

  }

  .btnen {
    margin-left: -2%;
    

}
.hedt{
    margin-top: -32%;
    font-size: 35px;
    margin-left: 1%;
  }


.head {
    
    font-size: 40px;
  }

      }


   
  }

`;