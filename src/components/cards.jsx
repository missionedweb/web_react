import React from "react";
import per_learn from "../Images/per_learn.svg";
import live_inter from "../Images/live_inter.svg";
import convi_safe from "../Images/convi_safe.svg";
import expert_teac from "../Images/expert_teac.svg";
import styled from "styled-components";
import NavbarComponent from "./NavbarComponent";
import GetTheApp from "./GetTheApp";
import "./css/crs.scss";
import Footer from "./Footer";


const Cards = () => {
  return (
    <div>
   
      <Wrapper>
          <section style={{ background: 'aliceblue' }} >
        <h1 style={{ textAlign: "center", color: "black" }}>
          Why <span style={{ color: "orange" }}>MissionEd </span>works?
        </h1>
        <p style={{ textAlign: "center", color: "black" }}>
          The elite features of MissionEd makes it one of the No. 1 Ed-Tech
          platforms in India
        </p>
        {/* </div> */}
        <div className="container bg21" >
          <div className="card-deck">
            {/* <Link to="/feature1"> */}
            {/* <div> */}

            {/* </div> */}
            {/* </Link> */}
            <div
              className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 "
              style={{ borderRadius: "30px" }}
              data-aos="zoom-in-up"
              data-aos-duration={1500}
            ><a href="/feature4" style={{ textDecoration: 'none' }}>
              <img
                className="card-img-top  mx-auto image-4 "
                style={{
                  paddingTop: "10px",
                  marginTop: "50px",
                  marginBottom: "70px",
                }}
                src={live_inter}
                alt=""
              />
              <div className="card-block ">
                <h4 className="card-title text-center card-two  ct-1" style={{color: "#eb5757"}}>
                  Live and Interactive
                </h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-md-block d-lg-none">
              {/* wrap every 3 on md*/}
            </div>
            <div
              className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4"
              style={{ borderRadius: "30px" }}
              data-aos="zoom-in-up"
              data-aos-duration={2000}
            >  <a href="/feature5" style={{ textDecoration: 'none' }}>
              <img
                className="card-img-top  mx-auto image-4 "
                style={{
                  paddingTop: "30px",
                  marginTop: "50px",
                  marginBottom: "70px",
                }}
                src={per_learn}
                alt=""
              />
              <div className="card-block ">
                <h4 className="card-title text-center  card-three  ct-1" style={{paddingTop: "35px" , color: "#2f80ed"}}>
                  Personalised Learning
                </h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none">
              {/* wrap every 2 on sm*/}
            </div>
            <div className="w-100 d-none d-lg-block d-xl-none">
              {/* wrap every 4 on lg*/}
            </div>
            <div
              className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4"
              style={{ borderRadius: "30px" }}
              data-aos="zoom-in-up"
              data-aos-duration={2500}
            ><a href="/feature3" style={{ textDecoration: 'none' }}>
              <img
                className="card-img-top  mx-auto image-4 "
                style={{
                  paddingTop: "30px",
                  marginTop: "20px",
                  marginBottom: "70px",
                }}
                src={expert_teac}
                alt=""
              />
              <div className="card-block ">
                <h4 className="card-title text-center card-four  ct-1" style={{color: "#f2c94c"}}>
                  Expert Teacher
                </h4>
              </div>
              </a>
            </div>
            <div
              className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 "
              style={{ borderRadius: "30px" }}
              data-aos="zoom-in-up"
              data-aos-duration={3000}
            >
            <a href="/feature2" style={{ textDecoration: 'none' }}>
              <img
                className="card-img-top  mx-auto image-4 "
                style={{
                  paddingTop: "10px",
                  marginTop: "50px",
                  marginBottom: "70px",
                }}
                src={convi_safe}
                alt=""
              />
              <div className="card-block ">
                <h4 className="card-title text-center card-five ct-1" style={{color: "#6fcf97"}}>
                  Convinent and Safe
                </h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-xl-block">
              {/* wrap every 5 on xl*/}
            </div>
          </div>
          <div className="col-lg-12 center col-md-6 col-12 mt-1 text-right explore-all">
            <a href="/features">
              <u>Explore more</u> <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* </div> */}
        <br />
        <br />
        <br />
          </section>
        <GetTheApp />
        <Footer />
      </Wrapper>
    </div>
  );
};
export default Cards;

const Wrapper = styled.div`
  body {
    font-family: "Playfair Display", serif;
    background-image: url("Images/bg.png");
  }
  .jumbotron {
    /* padding-top: .5rem; */
    height: 200px;
    margin: 0 auto !important;
    top: 24.41%;
    bottom: 51.17% !important;
    text-align: center !important;
    background: linear-gradient(
      297.17deg,
      #b06ab3 6.67%,
      #4568dc 91.82%
    ) !important;
    mix-blend-mode: normal !important;
  }
  h2 {
    font-weight: 100px;
  }
  .card1 {
    background-color: #ffffff;
    padding: 20px;
  }

  .card-deck .card-two {
    margin-top: -45px;
  }

  .card-deck .card-three {
    margin-top: 40px;
  }

  .card-deck .card-four {
    margin-top: 20px;
  }

  .card-deck .card-five {
    margin-top: 10px;
  }

  .main-title {
    color: #fa9917;
  }
  #main {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
  }
  #h1 {
    background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
    width: 100%;
    height: 20vh;
    position: relative;
  }
  .card {
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    position: relative;
    font-family: "Playfair Display", serif;
    font-weight: bold;

    letter-spacing: calc(0.5em+1vh);
    line-height: calc(1em+0.75vh);
    color: white;
    padding-top: 2%;
    font-size: 70px;
  }
  h3 {
    font-weight: bold;
  }
  h2 {
    position: relative;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 50px;

    text-align: center;
    vertical-align: middle;
    top: 1%;
  }
  .image-background {
    background-color: #fffbef;
  }
  .card01 {
    width: 50%;
  }
  .image-1 {
    margin-top: 5%;
  }
  .image-2 {
    margin-top: 5%;
  }
  .image-3 {
    margin-top: 5%;
  }
  .image-4 {
    margin-top: 5%;
  }
  .image-5 {
    margin-top: 5%;
  }
  .image-6 {
    margin-bottom: 5%;
  }
  .btn {
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
  }
  .explore-all a {
    color: #fb8f1d;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }
  /* Darker background on mouse-over */
  .btn:hover {
    box-shadow: 2px 2px 5px black;
  }

  .ct-1 {
    color: #ff6200;

    font-size: 24px;
    letter-spacing: 0.6px;
    line-height: 28px;
  }
  .ct-2 {
    color: #000;

    font-size: 18px;
    letter-spacing: 0.45px;
    line-height: 21px;
    opacity: 0.8;
    padding-bottom: 10%;
  }

  .banner {
    margin-top: 10%;
  }

  .live {
    margin-top: -35px;
  }

  .main-para {
    opacity: 0.5;
  }

  .abovep {
    text-align: justify;
  }

  .women1 img {
    margin-left: 50px;
    height: auto;
    width: 500px;
  }

  .women2 img {
    margin-left: 200px;
    height: auto;
    width: 500px;
  }

  .women3 img {
    height: auto;
    width: 500px;
  }

  /*flicker animation heading*/

  .text {
    font: 5em/1 "Playfair Display", serif;
    fill: none;
    stroke-width: 3;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #f2385a;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #f5a503;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #e9f1df;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #56d9cd;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #3aa1bf;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }

  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
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

    .abc {
      display: none;
    }
    .phone {
      margin-left: 35px;
      margin-bottom: 20px;
    }
    .card {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .xyz {
      margin-bottom: -40px;
    }
  }
`;
