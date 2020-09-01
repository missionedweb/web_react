import React, { useState } from "react";
import Group52 from "../Images/Group52.png";
import books from "../Images/books.png";
import counsellingImg from "../Images/counsellingImg.png";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";

const GetTheApp = () => {
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
        <div className="container-fluid get-app">
          <div className="text-block">
            <img
              className="img-mobile"
              src={Group52}
              alt=""
              data-aos="flip-up"
              data-aos-duration="2000"
            />
            <p
              className="app-txt"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="app">
                Get the app now! <br />
              </span>
              <br />
              Download the app and start learing with MissionEd at your
              <br /> fingertips.
              <br />
              <br />
              Over 500+ installs already
              <br />
              <br />
              <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned">
                <button className="download border-0">Download</button>
              </a>
              <img
                className="books"
                src={books}
                alt=""
                data-aos="flip-up"
                data-aos-duration="2000"
              />
            </p>
          </div>
        </div>
        <div className="container-fluid counselling">
          <div
            className="counselling-left"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <p className="app">
              <span>Get a free counselling today!</span>
              <br />
            </p>
            <h6 />
            Talk to our experts online and get free counselling whenever you
            <br /> needs and learn how MissionEd can help you in overcoming{" "}
            <br />
            all your academic challenges.
            <br />
            <br />
            <br />
            <p />
            <div className="buttonIn ">
              <PhoneInput
                type="tel"
                // className="form-control textfield"
                value={value}
                onChange={setValue}
                defaultCountry="IN"
                placeholder="Phone Number"
              />
              <button className="border-0 py-0 join" onClick={alertModal}>
                Join
              </button>
              <br />
            </div>
          </div>
          <img className="counselling-img" src={counsellingImg} />
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
