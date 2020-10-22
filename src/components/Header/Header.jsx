import React, { useState } from "react";
import NewImg from "../../Images/NewImg.png";
import playstore from "../../Images/playstore.png";
import appstore from "../../Images/appstore.png";
import Typical from "react-typical";
import swal from "sweetalert";
import Owldemo from '../Owldemo'
import MuiPhoneNumber from "material-ui-phone-number";
import { Input, TextField } from "@material-ui/core";
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
          <section className="bg" >
        <div className="header" >

          <div className="image-section  " style={{ float: "right" }}>
              <br/>
              <br/>
              <br/>
              <br/>
            <img data-aos="fade-left" style={{maxWidth : "100% !important"}} className="img-fluid mr-5" src={NewImg} />

          </div>
          <div className="headerButtons "  >
            <h1 className="tagline text-center" data-aos="fade-down" data-aos-duration="3000">
              <br />
              <b>
                Learn From The <br />
                Best <span>{" "}
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
              <h6 className="tg2 text-center" data-aos="fade-right" data-aos-duration="500">
                Learning app for class 8-12{" "}
              </h6>{" "}
              <br />
              <br />
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
              <br /> <br />
              <div
                className="play  d-flex justify-content-center"
                data-aos="zoom-out"
                data-aos-duration="1000">
                <a href="https://play.google.com/store/apps/details?id=com.missionedappdev.missoned" target="_black">
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
            <div className="gettheapp" style={{display : "flex", width : "62%", justifyContent : "center"}}>
            <p className="text-center getapp " data-aos="zoom-out" data-aos-duration="1000">
            {" "}
            or <br /> Get the app on your phone now
          </p>
            </div>
          <div className="phonenum " style={{width : "63%", display:"flex", justifyContent : "center"}}>
          <div className="buttonIn  " data-aos="zoom-out" data-aos-duration="500" style={{border : "none" ,height : "38px", width :"300px", }}>
              <form className="gform" method="post" data-email="patelaryan7751@gmail.com" action="https://script.google.com/macros/s/AKfycbwcJ9HpreX73Ze6dqz0pTn8ONQDLweP8tWqq2NqwAYxBdCV7Nw/exec">
            
             <input required className="form-control" name="phn" onChange={handleOnChange} placeholder = "Enter your mobile number"  style={{ width :"300px", height : "45px", borderRadius : "30px", boxShadow : ""}} />
            <button className="joins"  style={{position : "absolute", top:"6px", right : "4px", borderRadius : "30px", }} onClick={alertModal}>Join</button>
                  <div style={{display:"none"}} className="thankyou_message">
</div>
              </form>
 
               <br />
             </div>
          </div>
          </div>
          <b>
            
          </b>
        </div>
        <b>
          <br />
          
         
        </b>
              </section>
              <br/>
              <br/>
              <br/>
          <Owldemo/>  
          <br/>
          <br/>
      </div>
    </div>
  );
}

export default Header;
