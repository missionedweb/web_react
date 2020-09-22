import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import team1 from "./Images/team1.png";
import team2 from "./Images/team2.png";
import team3 from "./Images/team3.png";
import Testimonials from "../Testimonials";
import NavbarComponent from "../NavbarComponent";
import GetTheApp from "../GetTheApp"

const Testim = () => {
  return (
    <div>
      <header>
      <NavbarComponent />
      </header>
      <Wrapper>
        <div>
          <div className="jumbotron text-uppercase">
            <div
              className="heading"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
            >
              Testimonials
            </div>
          </div>

          {/* <Testimonials /> */}

          <p
            className="testimonials-heading"
            data-aos="zoom-in"
            data-aos-duration={1500}
          >
            <b>What they are saying?</b>
          </p>
          <div className="wrapper">
            <div className="team">
              <div
                className="team_member"
                data-aos="flip-right"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Piya</h3>
                <p className="role">Student</p>
                <p>
                  “I am very happy to be a part of MissionEd. 
                  I thank MissionEd for helping me secure high grades.” 
                </p>
              </div>
              <br />
              <div
                className="team_member"
                data-aos="flip-right"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team2} alt="Team_image" />
                </div>
                <h3>Samiksha</h3>
                <p className="role">Parent</p>
                <p>
                   “It has been an absolutely wonderful experience for all of us! 
                   His teacher pays great attention to every child in the 
                   class and encourages them to speak. The classes are more of 
                   interactive sessions where Reyan feels very comfortable to express himself.” 
                </p>
              </div>
              <br />
              <div
                className="team_member"
                data-aos="flip-right"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team3} alt="Team_image" />
                </div>
                <h3>Neha</h3>
                <p className="role">Student</p>
                <p>
                  “Beautifully explained. Simple language & taught in easy way.”   </p>
              </div>
              <div
                className="team_member"
                data-aos="flip-right"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Soham</h3>
                <p className="role">Student</p>
                <p>
                  “MissionEd  has been an excellent experience for me, 
                  The constant support and 
                  guidance from the teachers have helped me develop confidence 
                  to do my best. The teachers are 
                  very friendly, approachable and always available for any sort of help. 
                  Their unique style of teaching and explaining the subject, 
                  makes understanding any concept simple and easy.”


                </p>
              </div>
              <br />
              <div
                className="team_member"
                data-aos="flip-left"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Susan</h3>
                <p className="role">Student</p>
                <p>
                  “Overall, I thought the course was great. 
                  I did get tons of useful experience from the 
                  course and the instructor was great.”
                </p>
              </div>
              <br />
              <div
                className="team_member"
                data-aos="flip-left"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Amyra</h3>
                <p className="role">Student</p>
                <p>
                  “One thing that impressed me about Online-Learning 
                  is if I have a question, 
                  there is always a quick response. This is critical when distance is involved. 
                  This helped getting me through difficult issues and keeping in touch with the class.”
                </p>
              </div>
              <br />
              <div
                className="team_member"
                data-aos="flip-left"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Sonam</h3>
                <p className="role">Student</p>
                <p>
                  “Excellent content and assignments that build 
                  on your knowledge, reinforce, and then expand.”
                </p>
              </div>
              <div
                className="team_member"
                data-aos="flip-left"
                data-aos-duration={2000}
              >
                <div
                  className="team_img"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={team1} alt="Team_image" />
                </div>
                <h3>Rahul</h3>
                <p className="role">Student</p>
                <p>
                  “Course materials were good, the mentoring approach was good.”   
                </p>
              </div>
            </div>
          </div>
        </div>
        <GetTheApp />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Testim;

const Wrapper = styled.div`
  body {
    background-image: url("Images/bg.png");
    font-family: "Playfair Display", serif;
  }
  html,
  body {
    overflow-x: hidden;
  }
  .jumbotron {
    background: #fff5e5;
    height: 200px;
    padding-top:100px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    color: #202336;
  }
  
  .testimonials-heading1 {
    
  }

  .main {
    text-align: center;
    color: #fa9917;

    font-size: 60px;
    letter-spacing: 2.86px;
    line-height: 70px;
    margin-top: 7%;
  }

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: default;
  }

  .testim {
    width: 100%;
    margin-top: 170px;
    margin-bottom: -200px;
    top: 50%;
    -webkit-transform: translatey(-50%);
    -moz-transform: translatey(-50%);
    -ms-transform: translatey(-50%);
    -o-transform: translatey(-50%);
    transform: translatey(-50%);
  }

  .testim .wrap {
    width: 100%;
    max-width: 1020px;
    padding: 40px 20px;
    margin: auto;
  }

  .testim .arrow {
    display: block;
    position: absolute;
    color: #333;
    cursor: pointer;
    font-size: 2em;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 5px;
    z-index: 22222222;
  }

  .testim .arrow:before {
    cursor: pointer;
  }

  .testim .arrow:hover {
    color: green;
  }

  .testim .arrow.left {
    left: 70px;
  }

  .testim .arrow.right {
    right: 70px;
  }

  .testim .dots {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    display: block;
    z-index: 3333;
    height: 12px;
  }

  .testim .dots .dot {
    list-style-type: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid green;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .testim .dots .dot.active,
  .testim .dots .dot:hover {
    background: green;
    border-color: green;
  }

  .testim .dots .dot.active {
    -webkit-animation: testim-scale 0.5s ease-in-out forwards;
    -moz-animation: testim-scale 0.5s ease-in-out forwards;
    -ms-animation: testim-scale 0.5s ease-in-out forwards;
    -o-animation: testim-scale 0.5s ease-in-out forwards;
    animation: testim-scale 0.5s ease-in-out forwards;
  }

  .testim .cont {
    position: relative;
    overflow: hidden;
  }

  .testim .cont > div {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 70px 0;
    opacity: 0;
  }

  .testim .cont > div.inactive {
    opacity: 1;
  }

  .testim .cont > div.active {
    position: relative;
    opacity: 1;
  }

  .testim .cont div .img img {
    display: block;
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50%;
  }

  .testim .cont div h2 {
    color: green;
    font-size: 1em;
    margin: 15px 0;
  }

  .testim .cont div p {
    font-size: 1.15em;
    color: #333;
    width: 70%;
    margin: auto;
  }

  .testim .cont div.active .img img {
    -webkit-animation: testim-show 0.5s ease-in-out forwards;
    -moz-animation: testim-show 0.5s ease-in-out forwards;
    -ms-animation: testim-show 0.5s ease-in-out forwards;
    -o-animation: testim-show 0.5s ease-in-out forwards;
    animation: testim-show 0.5s ease-in-out forwards;
  }

  .testim .cont div.active h2 {
    -webkit-animation: testim-content-in 0.4s ease-in-out forwards;
    -moz-animation: testim-content-in 0.4s ease-in-out forwards;
    -ms-animation: testim-content-in 0.4s ease-in-out forwards;
    -o-animation: testim-content-in 0.4s ease-in-out forwards;
    animation: testim-content-in 0.4s ease-in-out forwards;
  }

  .testim .cont div.active p {
    -webkit-animation: testim-content-in 0.5s ease-in-out forwards;
    -moz-animation: testim-content-in 0.5s ease-in-out forwards;
    -ms-animation: testim-content-in 0.5s ease-in-out forwards;
    -o-animation: testim-content-in 0.5s ease-in-out forwards;
    animation: testim-content-in 0.5s ease-in-out forwards;
  }

  .testim .cont div.inactive .img img {
    -webkit-animation: testim-hide 0.5s ease-in-out forwards;
    -moz-animation: testim-hide 0.5s ease-in-out forwards;
    -ms-animation: testim-hide 0.5s ease-in-out forwards;
    -o-animation: testim-hide 0.5s ease-in-out forwards;
    animation: testim-hide 0.5s ease-in-out forwards;
  }

  .testim .cont div.inactive h2 {
    -webkit-animation: testim-content-out 0.4s ease-in-out forwards;
    -moz-animation: testim-content-out 0.4s ease-in-out forwards;
    -ms-animation: testim-content-out 0.4s ease-in-out forwards;
    -o-animation: testim-content-out 0.4s ease-in-out forwards;
    animation: testim-content-out 0.4s ease-in-out forwards;
  }

  .testim .cont div.inactive p {
    -webkit-animation: testim-content-out 0.5s ease-in-out forwards;
    -moz-animation: testim-content-out 0.5s ease-in-out forwards;
    -ms-animation: testim-content-out 0.5s ease-in-out forwards;
    -o-animation: testim-content-out 0.5s ease-in-out forwards;
    animation: testim-content-out 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes testim-scale {
    0% {
      -webkit-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -webkit-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -webkit-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -webkit-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-moz-keyframes testim-scale {
    0% {
      -moz-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -moz-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -moz-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -moz-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-ms-keyframes testim-scale {
    0% {
      -ms-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -ms-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -ms-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -ms-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-o-keyframes testim-scale {
    0% {
      -o-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -o-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -o-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -o-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @keyframes testim-scale {
    0% {
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-webkit-keyframes testim-content-in {
    from {
      opacity: 0;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes testim-content-in {
    from {
      opacity: 0;
      -moz-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes testim-content-in {
    from {
      opacity: 0;
      -ms-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes testim-content-in {
    from {
      opacity: 0;
      -o-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes testim-content-in {
    from {
      opacity: 0;
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @-webkit-keyframes testim-content-out {
    from {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-moz-keyframes testim-content-out {
    from {
      opacity: 1;
      -moz-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -moz-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-ms-keyframes testim-content-out {
    from {
      opacity: 1;
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -ms-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-o-keyframes testim-content-out {
    from {
      opacity: 1;
      -o-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes testim-content-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  @-webkit-keyframes testim-show {
    from {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-moz-keyframes testim-show {
    from {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }
  }

  @-ms-keyframes testim-show {
    from {
      opacity: 0;
      -ms-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }

  @-o-keyframes testim-show {
    from {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes testim-show {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @-webkit-keyframes testim-hide {
    from {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  @-moz-keyframes testim-hide {
    from {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0);
    }
  }

  @-ms-keyframes testim-hide {
    from {
      opacity: 1;
      -ms-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -ms-transform: scale(0);
      transform: scale(0);
    }
  }

  @-o-keyframes testim-hide {
    from {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0);
    }
  }

  @keyframes testim-hide {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  @media all and (max-width: 300px) {
    body {
      font-size: 14px;
    }
  }

  @media all and (max-width: 500px) {
    .testim .arrow {
      font-size: 1.5em;
    }

    .testim .cont div p {
      line-height: 25px;
    }
  }

  .load-more-container {
    background: #fff;
    width: 500px;
    min-height: 500px;
    margin: 20px auto;
    position: relative;
  }
  .load-more-container ul {
    list-style-type: none;
    padding: 0;
  }
  .load-more-container ul:after {
    content: "";
    display: table;
    clear: both;
  }
  .load-more-container ul li {
    width: calc(25% - 10px);
    margin: 10px 5px 0;
    height: 100px;
    background: #1d95f8;
    color: #fff;
    float: left;
    border-radius: 2px;
  }
  .load-more-container ul li:nth-child(1n + 5) {
    max-height: 0;
    opacity: 0;
    transition: 0.1s ease-in;
  }
  .load-more-container .load-more-btn {
    width: 150px;
    line-height: 40px;
    border-radius: 2px;
    margin: 0 auto;
    display: block;
    background: #494747;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }
  .load-more-container .load-more-btn:hover {
    background: #333;
  }
  .load-more-container .load-more-btn .loaded {
    display: none;
  }
  .load-more-container #load-more {
    display: none;
  }
  .load-more-container #load-more:checked ~ ul li:nth-child(1n + 5) {
    max-height: 999px;
    opacity: 1;
    transition: 0.2s ease-in;
  }
  .load-more-container #load-more:checked ~ .load-more-btn .loaded {
    display: block;
  }
  .load-more-container #load-more:checked ~ .load-more-btn .unloaded {
    display: none;
  }
  .testimonials-heading {
    font-weight: bold;
    font-size: 45px;
    line-height: 53px;
    text-align: center;
    color: #ff6200;
    margin-top: 80px;
  }
  .wrapper {
    margin-top: 10%;
  }
  #more {
    display: none;
  }
  .wrapper h1 {
    font-family: Roboto;
    font-size: 52px;
    margin-bottom: 60px;
    text-align: center;
  }

  .team {
    display: flex;
    justify-content: center;
    width: auto;
    text-align: center;
    flex-wrap: wrap;
    margin: 50px;
  }

  .team .team_member {
    margin: 5px;
    margin-bottom: 150px;
    margin-right: 20px;
    width: 300px;
    padding: 20px;
    line-height: 20px;
    color: #8e8b8b;
    position: relative;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .team .team_member:hover {
    box-shadow: 0 6px 20px 0 gray;
  }
  .team_img:hover {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .team .team_member h3 {
    color: black;
    font-size: 26px;
    margin-top: 50px;
  }

  .team .team_member p.role {
    color: #fa9917;
    font-family: Roboto;
    margin: 12px 0;
    font-size: 12px;
    text-transform: uppercase;
  }

  .team .team_member .team_img {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
  }

  .team .team_member .team_img img {
    width: 100px;
    height: 100px;
    padding: 5px;
  }
  /* Get App */
  .get-app {
    margin-top: 340px;
    width: 100%;
    height: 400px;
    background: #fff5e5;
    margin-top:150px;
  }
  .app {
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
    color: black;
  }

  .img-mobile {
    width: auto;
    height: 500px;
    margin-top: -170px;
    margin-left: 15%;
    border-radius: 8px;
  }
  .app-txt {
    float: right;
    margin-right: 25%;
    font-style: normal;
    color: #7d7987;
    font-size: 20px;
    padding: 40px;
  }

  .download {
    background: #fb8f1d;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 15;
    align-items: center;
    color: #ffffff;
  }
  .download:hover {
    box-shadow: 2px 2px 5px black;
    color: white;
  }
  .books {
    float: right;
  }
  /*Counselling*/
  .counselling {
    margin-top: 200px;
    width: 100%;
    height: 350px;
    background: transparent;
  }
  .counselling-img {
    float: right;
    margin-top: -120px;
    margin-right: 15%;
  }
  .counselling-left {
    float: left;
    margin-left: 15%;
    color: #7d7987;
  }
  .buttonIn {
    display: flex;
  }

  #phone {
    width: 300px;
  }
  .joins {
    background: #fa9917;
    border-radius: 0 5px 5px 0;
    width: 70px;
    height: 40px;
    color: white;
    margin-top: -8px;
  }
  .textfield {
    width: 50%;
  }

  /*MEDIA QUERIES*/
  @media (max-width: 992px) {
    .display {
      display: none;
    }
  }
  @media (max-width: 1382px) {
    .form-display {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 1382px) {
    .right-img {
      display: none;
    }
  }
  @media (max-width: 1430px) {
    .img-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 601px) {
    .app-txt {
      font-size: 70%;
      margin-top: 30px;
    }
  }

  @media (max-width: 1396px) {
    .counselling-img {
      display: none;
    }
  }
  @media screen and (max-width: 601px) {
    .counselling-left {
      font-size: 70%;
    }
  }

  @media (max-width: 1396px) {
    .counselling {
      margin-top: 50px;
    }
  }
  @media (max-width: 1396px) {
    .get-app {
      margin-top: 50px;
    }
  }
`;
