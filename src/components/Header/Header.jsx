import React, { useState } from "react";
import NewImg from "../../Images/NewImg.png";
import playstore from "../../Images/playstore.png";
import learn1 from "../../Images/learn1.png";
import practice1 from "../../Images/practice1.png";
import discuss1 from "../../Images/discuss1.png";
import succeed1 from "../../Images/succeed1.png";
import appstore from "../../Images/appstore.png";
import Typical from "react-typical";
import swal from "sweetalert";
import Owldemo from "../Owldemo";
import MuiPhoneNumber from "material-ui-phone-number";
import { Input, TextField } from "@material-ui/core";
import { Card } from "ui-neumorphism";
import { CardContent } from "ui-neumorphism";
import { CardAction } from "ui-neumorphism";
import { Subtitle2 } from "ui-neumorphism";
import { H5 } from "ui-neumorphism";
import { Body2 } from "ui-neumorphism";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
function Header() {
  const [value, setValue] = useState("");
  const alertModal = () => {
    if (value) {
      swal({
        text: "Stay connected someone from MissionEd team will reach out soon",
        icon: "success",
      });
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <section className="bg">
          <div className="header">
            <div className="container">
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-7">
                  <div className="headerButtons ">
                    <h1
                      className="tagline text-center cc"
                      data-aos="fade-down"
                      data-aos-duration="3000">
                      <br />
                      <b>
                        Learn From The <br />
                        Best{" "}
                        <span>
                          {" "}
                          <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={["Tutors", 3000, "Guides", 3000, "Experts", 3000]}
                          />
                          <span
                            className="typewriter-text"
                            data-text='[ "Experts. ", "Tutors. ", "Guides. " ]'
                          />
                        </span>
                      </b>
                    </h1>
                    <b>
                      <center>
                        {" "}
                        <h6
                          className="tg2 text-center"
                          data-aos="fade-right"
                          data-aos-duration="500">
                          Learning app for class 8-12{" "}
                        </h6>{" "}
                        <div
                          className="x1 justify-content-between "
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          style={{ textAlign: "center" }}>
                          <a
                            href="/register"
                            className="mt-2 btn btn-lg btn-white join-btn"
                            style={{
                              background: "#FB8F1D",
                              borderRadius: "8px",
                              padding: "15px",
                              marginRight: "40px",
                            }}>
                            Join for FREE
                          </a>
                          <a
                            href="#"
                            className="mt-2 btn btn-lg btn-white join-btn"
                            style={{
                              background: "#2F80ED",
                              borderRadius: "8px",
                              padding: "15px",
                              marginRight: "40px",
                            }}>
                            Explore Courses
                          </a>
                        </div>
                      </center>
                      <br /> <br />
                      <div
                        className="play  d-flex justify-content-center"
                        data-aos="zoom-out"
                        data-aos-duration="1000">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned"
                          target="_black">
                          <img
                            className="store mr-3 img-fluid"
                            src={playstore}
                            width="200"
                            height="40"
                            alt=""
                          />
                        </a>
                        {/* <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned"> */}
                        <img
                          className="store img-fluid"
                          src={appstore}
                          width="200"
                          height="40"
                          alt=""
                        />
                        {/* </a> */}
                      </div>
                    </b>
                    <center>
                      <div
                        className="gettheapp"
                        style={{ display: "flex", width: "62%", justifyContent: "center" }}>
                        <p
                          className="text-center getapp "
                          data-aos="zoom-out"
                          data-aos-duration="1000">
                          {" "}
                          or <br /> Get the app on your phone now
                        </p>
                      </div>
                      <div
                        className="phonenum "
                        style={{ width: "auto", display: "flex", justifyContent: "center" }}>
                        <div
                          className="buttonIn  "
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          style={{ border: "none", height: "38px", width: "auto" }}>
                          <form
                            className="gform"
                            method="post"
                            data-email="patelaryan7751@gmail.com"
                            action="https://script.google.com/macros/s/AKfycbwcJ9HpreX73Ze6dqz0pTn8ONQDLweP8tWqq2NqwAYxBdCV7Nw/exec">
                            <div className="row">
                              <div className="col">
                                <br />
                                <Card
                                  bordered
                                  style={{
                                    width: "300px",
                                    background: "white",
                                    height: "45px",
                                    borderRadius: "30px",
                                  }}>
                                  <input
                                    required
                                    className="form-control"
                                    name="Nam"
                                    onChange={handleOnChange}
                                    placeholder="Enter your name"
                                    style={{
                                      width: "300px",
                                      height: "45px",
                                      borderRadius: "30px",
                                      diplay: "inline-block",
                                      boxShadow: "20px",
                                    }}
                                  />
                                </Card>
                              </div>
                              <div className="col">
                                <br />
                                <Card
                                  bordered
                                  style={{
                                    width: "300px",
                                    background: "white",
                                    height: "45px",
                                    borderRadius: "30px",
                                  }}>
                                  <input
                                    required
                                    className="form-control"
                                    name="phn"
                                    onChange={handleOnChange}
                                    placeholder="Enter your mobile number"
                                    style={{
                                      width: "300px",
                                      height: "45px",
                                      borderRadius: "30px",
                                      boxShadow: "20px",
                                    }}
                                  />
                                </Card>
                              </div>
                            </div>
                            <br />
                            <div className="col-auto">
                              <Button className="joins" onClick={alertModal}>
                                Enquire Now
                              </Button>
                              <br />
                            </div>
                            <div style={{ display: "none" }} className="thankyou_message"></div>
                          </form>

                          <br />
                        </div>
                      </div>
                    </center>
                  </div>
                </div>

                <div className="col-md-5 cc">
                  <br /> <br /> <br /> <br />
                  <img data-aos="fade-left" className="img-fluid mr-5" src={NewImg} />
                </div>
                <div className="col-md-5 cf">
                  <br /> <br /> <br /> <br />
                  <div className="row">
                    <div className="col-6">
                      <Card bordered style={{ background: "white" }}>
                        <CardContent style={{ background: "white" }}>
                          <img className="img-fluid" src={learn1} />
                          <center>
                            {" "}
                            <H5>Learn</H5>
                          </center>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card bordered style={{ background: "white" }}>
                        <CardContent style={{ background: "white" }}>
                          <img className="img-fluid" src={practice1} />
                          <center>
                            {" "}
                            <H5>Practice</H5>
                          </center>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="col-6 mt-2">
                      <Card bordered style={{ background: "white" }}>
                        <CardContent style={{ background: "white" }}>
                          <img className="img-fluid" src={discuss1} />
                          <center>
                            {" "}
                            <H5>Discuss</H5>
                          </center>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="col-6 mt-2">
                      <Card bordered style={{ background: "white" }}>
                        <CardContent style={{ background: "white" }}>
                          <img className="img-fluid" src={succeed1} />
                          <center>
                            {" "}
                            <H5>Succeed</H5>
                          </center>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <b></b>
              </div>
              <b>
                <br />
              </b>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <Owldemo />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Header;
