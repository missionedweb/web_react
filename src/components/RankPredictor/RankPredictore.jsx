import React, { useState } from "react";
import styled from "styled-components";
import Group67 from "../contactUs/Images/Group 1.png";
import Footer from "../Footer";
import GetTheApp from "../GetTheApp";
import NavbarComponent from "../NavbarComponent";
import Testimonials from "../Testimonials";
import axios from "axios";
import swal from "sweetalert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { firestore } from "../../firebase/firebase.utils";
import { firebase } from "firebase";
import { TextField } from "@material-ui/core";

const Counselling = () => {
  const [details, setDetails] = useState({
    user: "",
    phone: "",
    email: "",
    marks: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let FLASK_URL = "https://rankbackend.herokuapp.com";

    setLoading(true);
    await axios
      .get(FLASK_URL + `/rank/${details.marks}`)
      .then((res) => {
        swal({
          title: `Your Predicted Rank is : `,
          text: `${Math.round(res.data)}`,
          icon: "success",
        });

        firestore.collection("jeeadv").add({
          name: details.user,
          phone: details.phone,
          email: details.email,
          marks: details.marks,
          rank: Math.round(res.data),
        });
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <Wrapper>
        <div>
          <div>
            <div className="heading" data-aos="zoom-in-up" data-aos-duration={2500}>
              Rank Predictor
            </div>
          </div>
          <br />
          <br />
          <p
            className=" center-text "
            data-aos="slide-left"
            data-aos-duration={1000}
            style={{ fontSize: "57px", fontWeight: "bold" }}>
            Want to Know your expected Rank?
          </p>
          <br />
          <br />
          <p className="center-text-1" data-aos="slide-right" data-aos-duration={1000}>
            We have something special for you!
          </p>
          <br />
          <br />
          <br />
          <p
            className=" center-text "
            data-aos="slide-left"
            style={{ fontSize: "57px", fontWeight: "bold" }}>
            The first 100% AI based Rank predictor.
          </p>
          <br />
          <br />
          <div className="container p-10 ml-auto mr-auto">
            <div>
              <div data-aos="fade-down" data-aos-duration={1000}>
                <img src={Group67} className="right-img" alt="" style={{ width: "500px" }} />
              </div>
              <div className="form-display col-md-5" data-aos="zoom-in" data-aos-duration={600}>
                <center>
                  <h2
                    style={{
                      fontFamily: " sans-serif ",
                    }}>
                    Expected Jee Advanced Rank
                  </h2>
                </center>
                <br />
                <br />
                <center>
                  <p className="head ml-auto mr-auto"> Enter total marks out of 396</p>
                </center>
                <br />
                <form className="form" onSubmit={handleSubmit}>
                  <label htmlFor>Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                    name="user"
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />

                  <br />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <label htmlFor>Phone No.*</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone No."
                        name="phone"
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor>Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <br />
                  <label htmlFor>Marks*</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Marks"
                    name="marks"
                    onChange={handleChange}
                    required
                    max="396"
                    min="0"
                  />
                  <br />
                  {loading ? (
                    <button className=" col-md-12 border-0 btn submit ">
                      <CircularProgress size={24} />
                    </button>
                  ) : (
                    <button className=" col-md-12 border-0 btn submit " type="submit">
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Testimonials />
        <GetTheApp />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Counselling;

const Wrapper = styled.div`
  body {
    background-image: url("Images/bg.png");
    font-family: "Playfair Display", serif;
  }
  html,
  body {
    overflow-x: hidden;
  }
  .form-control {
    padding: 10px;
    margin-top: 5px;
    
  }
  .jumbotron {
    background: #fff5e5;
    height: 200px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    color: #202336;
    padding-top: 100px;
  }
  .center-text {
    font-weight: bold;
    font-size: 40px;
    line-height: 80px;
    text-align: center;
    color: #ff6200;
  }
  .center-text-1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    color: #f2994a;
    margin-top: -30px;
  }
  textarea {
    resize: none;
  }
  .text-1 {
    text-align: center;
  }

  .right-img {
    float: right;
    margin-top: 10px;
  }
  .form-display {
    background: #ffffff;
    border: 1px solid #fff5e5;
    box-shadow: 0px 16px 32px rgba(44, 39, 56, 0.04), 0px 32px 64px rgba(44, 39, 56, 0.08);
    border-radius: 16px;
    margin-top: 50px;
    padding: 20px;
    padding-right: 30px;
  }
  .message {
    font-size: 34px;

    color: #2c2738;
  }
  .head {
    font-size: 16px;
    color: #828282;
    margin-top: -15px;
  }
  .submit {
    background: #fb8f1d;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
    align-items: center;
    padding: 10px;
    color: #ffffff;
  }
  .submit:hover {
    color: white;
    box-shadow: 2px 2px 5px black;
  }

  /* Testimonials*/
  .read-all {
    background: #fb8f1d;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
    align-items: center;
    padding: 20px;
    color: #ffffff;
  }
  .read-all:hover {
    box-shadow: 2px 2px 5px black;
  }
  .main {
    text-align: center;
    color: #fa9917;

    font-size: 60px;
    letter-spacing: 2.86px;
    line-height: 70px;
    margin-top: 7%;
  }

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

  .myCarousel {
    background: #fafafa;
    margin-top: -6%;
    width: 54%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 6%;
    padding-bottom: 8%;
    padding-left: 5%;
    padding-right: 5%;
    border: 1px solid #ddd;
    height: 286px;
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

  /* Get App */
  .get-app {
    margin-top: 340px;
    width: 100%;
    height: 400px;
    background: #fff5e5;
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
    padding: 10px;
    align-items: center;
    padding: 20px;
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
  .download {
    background: #fb8f1d;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding-left: -200px;
    align-items: center;
    padding: 10px;
    color: #ffffff;
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
    margin-top: -20px;
  }
  .cta-text {
    margin-left: 20px;
  }
  .textfield {
    width: 50%;
  }
  .footer-section {
    background: #151414;
    position: relative;
    padding-left: 200px;
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
