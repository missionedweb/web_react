import React, { useState } from "react";
import Group52 from "../Images/Group52.png";
import books from "../Images/books.png";
import counsellingImg from "../Images/counsellingImg.png";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";
import AOS from "aos";
import MuiPhoneNumber from "material-ui-phone-number";

AOS.init();
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
  const handleOnChange = (value) => {
    setValue((prevState) => ({ ...prevState, phone: value }));
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
              data-aos-duration={1500}
            />
            <p className="app-txt" data-aos="fade-right" data-aos-duration="1000">
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
                <button
                  className="download border-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  >
                  Download
                </button>
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
          <div className="counselling-left" data-aos="zoom-out" data-aos-duration="1000">
            <p className="app">
              <span data-aos="zoom-out" data-aos-duration="1000">
                Get a free counselling today!
              </span>
              <br />
            </p>
            <h6 />
            Talk to our experts online and get free counselling whenever you
            <br /> needs and learn how MissionEd can help you in overcoming <br />
            all your academic challenges.
            <br />
            <br />
            <br />
            <p />
            <div className="buttonIn" data-aos="zoom-out" data-aos-duration="500" style={{ height : "33px", width :"300px", borderRadius : "5px"}}>
              <MuiPhoneNumber
                defaultCountry={"in"}
                onChange={handleOnChange}
                required
                id="phone"
                name="phone"
                value={value}
                style={{border : "1px solid black" , borderRadius : "5px 0px 0px 5px"}}
              />
              {/* <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} borderBottom={1} border={1}/> */}
              <button className="joins" onClick={alertModal} style={{ height : "32px" }}>
                Join
              </button>

              
            </div>
          </div>
          <img
            className="counselling-img"
            src={counsellingImg}
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;

