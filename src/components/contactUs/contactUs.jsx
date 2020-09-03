import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import GetTheApp from '../GetTheApp';
import Group67 from './Images/Group67.png';
import NavbarComponent from '../NavbarComponent';

const contactUs = () => {
  return (
    <div>
      <NavbarComponent />
      <Wrapper>
        <div>
          <div className="jumbotron">
            <div
              className="heading"
              data-aos="zoom-in-up"
              data-aos-duration={2500}
            >
              Contact Us
            </div>
            <div className="row above ">
              <div className="col" />
              <div
                className="col-sm-10 hidden-xs display"
                style={{ marginRight: '110px' }}
              >
                <div className="card top">
                  <div className="card-body">
                    <div
                      className="row"
                      data-aos="zoom-in"
                      data-aos-duration={1000}
                    >
                      <div className="col-md-4 center text">
                        <i className="fas fa-phone-alt  icon" />{' '}
                        <span className="txt"> Phone</span>
                        <br />
                        <br />
                        <span className="details">+91-9674037142</span>
                      </div>
                      <div className="col-md-4 center text ">
                        <i className="fas fa-envelope icon" />{' '}
                        <span className="txt">Email</span>
                        <br />
                        <br />
                        <span className="details">missioned@gmail.com</span>
                      </div>
                      <div className="col-md-4 center text-1 ">
                        <i className="fas fa-map-marker-alt icon" />
                        <span className="txt">Location</span>
                        <br />
                        <br />
                        <span className="details">New Delhi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div>
              <div
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: 'auto' }}
              >
                <img src={Group67} className="right-img" alt="" />
              </div>
              <div
                className="form-display col-md-5"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <h1 className="message">Leave a message</h1>
                <p className="head">We would contact you within 48 hours</p>
                <div className="form">
                  <label htmlFor>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <br />
                  <label htmlFor>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  <br />
                  <label htmlFor>Message</label>
                  <textarea
                    id="message"
                    name
                    rows={4}
                    cols={50}
                    className="form-control"
                    defaultValue={''}
                  />
                  <br />
                  <button className="border-0 btn download submit ">
                    Submit
                  </button>
                </div>
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

export default contactUs;

const Wrapper = styled.div`
  body {
    background-image: url('Images/bg.png');
    font-family: 'Playfair Display', serif;
  }
  html,
  body {
    overflow-x: hidden;
  }
  .jumbotron {
    background: #fff5e5;
    height: 237px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    color: #202336;
  }
  .top {
    margin-top: 50px;
    background: #ffffff;
    box-shadow: 0px 16px 32px rgba(44, 39, 56, 0.04),
      0px 32px 64px rgba(44, 39, 56, 0.08);
    border-radius: 16px;
  }
  .text {
    border-right: 1px solid #c4c4c4;
    text-align: center;
  }
  textarea {
    resize: none;
  }
  .text-1 {
    text-align: center;
  }
  .icon {
    color: #ff6200;
    font-size: 40px;
    margin-right: 6px;
  }
  .txt {
    color: #828282;
    font-size: 40px;
  }
  .details {
    font-size: 20px;
  }
  .right-img {
    float: right;
    margin-top: 100px;
  }
  .form-display {
    background: #ffffff;
    border: 1px solid #fff5e5;
    box-shadow: 0px 16px 32px rgba(44, 39, 56, 0.04),
      0px 32px 64px rgba(44, 39, 56, 0.08);
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
    margin-top: -0.5px;
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
