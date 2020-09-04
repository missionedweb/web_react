import React, { useState } from "react";
import NewImg from "../Images/NewImg.png";
import playstore from "../Images/playstore.png";
import appstore from "../Images/appstore.png";
import Typical from "react-typical";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";

const Header = () => {
  const [value, setValue] = useState("");
  const alertModal = () => {
    if (value !== "") {
      swal({
        text: "Stay connected someone from MissionEd team will reach out soon",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="header mx-auto">
          <div className=" image_section" style={{ float: "right" }}>
            <img data-aos="zoom-in" src={NewImg} />
          </div>
          <div className="headerButtons">
            <h1
              className="tagline "
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <br />
              <b>
                Learn From The <br />
                Best{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={["Tutors", 3000, "Guides", 3000, "Experts", 3000]}
                />
                <span
                  className="typewriter-text"
                  data-text='[ "Experts. ", "Tutors. ", "Guides. " ]'
                />
              </b>
            </h1>
            <b>
              <h6
                className="tg2"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Learning app for class 8-12{" "}
              </h6>{" "}
              <br />
              <br />
              <div
                className="x1 justify-content-between "
                data-aos="zoom-in"
                data-aos-duration="1000"
                style={{ textAlign: "center" }}
              >
                <a
                  href="/register"
                  className="mt-2 btn btn-lg btn-white join-btn"
                  style={{
                    background: "#FB8F1D",
                    borderRadius: "8px",
                    padding: "15px",
                    marginRight: "40px",
                  }}
                >
                  Join for FREE
                </a>
                <a
                  href="#"
                  className="mt-2 btn btn-lg btn-white "
                  style={{
                    background: "#2F80ED",
                    borderRadius: "8px",
                    padding: "15px",
                    marginRight: "40px",
                  }}
                >
                  Explore Courses
                </a>
              </div>
              <br /> <br />
              <div
                className="play  d-flex justify-content-center"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned">
                  <img
                    onClick="redirect()"
                    className="store img-fluid"
                    src={playstore}
                    width="200"
                    height="40"
                    alt=""
                  />
                </a>
                {/* <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned"> */}
                <img
                  onClick="redirect()"
                  className="store img-fluid"
                  src={appstore}
                  width="200"
                  height="40"
                  alt=""
                />
                {/* </a> */}
              </div>
            </b>
          </div>
          <b>
            <div className="secondtagline" style={{ maxWidth: "auto" }}></div>
          </b>
        </div>
        <b>
          <br />
          <p
            className="text-center getapp "
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            {" "}
            or <br /> Get the app on your phone now
          </p>
          <div
            className=" contact d-flex justify-content-center"
            style={{ marginLeft: "5%", marginRight: "5%" }}
          >
            <div
              className="buttonIn "
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <PhoneInput
                type="tel"
                // className="form-control textfield"
                value={value}
                onChange={setValue}
                defaultCountry="IN"
                placeholder="Phone Number"
              />
              <button className="border-0 py-0 joins" onClick={alertModal}>
                Join
              </button>
              <br />
            </div>
            <br />
            <br />
          </div>
        </b>
      </div>
    </div>
  );
};

export default Header;
