import React, { useState } from "react";
import "./TeacherDetails.css";
import { db } from "../../firebase/config";
import TeacherNav from "./TeacherNav";
import TeacherSignupNav from "./TeacherSignupNav";

function TeacherDetails() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [verification, setVerification] = useState("");
  const [segment, setSegment] = useState("");
  const [hours, setHours] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("details")
      .add({
        name: name,
        phone: phone,
        Email: Email,
        verification: verification,
        segment: segment,
        hours: hours,
        degree: degree,
        experience: experience,
      })

      .then(() => {
        alert("Your details has been Registered");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setPhone("");
    setEmail("");
    setVerification("");
    setSegment("");
    setHours("");
    setDegree("");
    setExperience("");
  };

  return (
    <div>
      <TeacherSignupNav />
      <div className="details">
        <form className="form" onSubmit={handleSubmit}>
          <h1
            style={{
              color: "black",
              fontFamily: "'Roboto', sans-serif",
              marginTop: "1em",
              marginBottom: "1em",
            }}>
            Teacher Registration form <i class="fa fa-address-card"></i>
          </h1>
          <label className="options">Full Name</label>
          <input
            className="inputDetails"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="options">Phone No.</label>
          <input
            className="inputDetails"
            placeholder="phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label className="options">Email Id</label>
          <input
            className="inputDetails"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="options">Verification of any one of the above</label>
          <input
            className="inputDetails"
            placeholder=""
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
          />

          <label className="options">Which segment 8-10 or 11-12</label>
          <input
            className="inputDetails"
            placeholder=""
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          />

          <label className="options">Available hours in a day</label>
          <input
            className="inputDetails"
            placeholder=""
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />

          <label className="options">College and Degree</label>
          <input
            className="inputDetails"
            placeholder=""
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />

          <label className="options">Years of Experience</label>
          <input
            className="inputDetails"
            placeholder=""
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TeacherDetails;
