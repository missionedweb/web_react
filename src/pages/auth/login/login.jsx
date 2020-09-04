import React, { useState } from "react";
import { auth } from "../../../firebase/firebase.utils";
import "./login.styles.scss";

function Login({ history }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = details;

    //signInWithEmailAndPassword
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setDetails({ email: "", password: "" });
      history.push("/dashboard");
    } catch (err) {
      //error handling
      console.log(err.message);
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "20%" }}>
        <input
          type="email"
          onChange={handleChange}
          required
          id="email"
          placeholder="Email Address"
          name="email"
          value={details.email}
        />
        <input
          onChange={handleChange}
          required
          name="password"
          placeholder="Password"
          type="password"
          id="password"
          value={details.password}
        />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
}

export default Login;
