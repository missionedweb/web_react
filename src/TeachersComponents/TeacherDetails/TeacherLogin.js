import React, { Component } from "react";
import firebase from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { browserHistory as history } from "react-router";
import Hello from "./TeacherHistory";

class TeacherLogin extends Component {
  handleClick = (e) => {
    this.props.history.push("/TeacherDashboard");
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }

  login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  register = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({ formTitle: "Register New User", loginBtn: false, fireErrors: "" });
    } else {
      this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error"> {this.state.fireErrors} </div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <Link to={{ pathname: "/TeacherDashboard" }}>
        <button
          className="loginBtn"
          type="button"
          disabled={!this.login}
          onClick={(event) => {
            this.login(event);
          }}
          disabled={!this.login.signInWithEmailAndPassword}
          value="Enter"
        />
      </Link>
    ) : (
      <input className="loginBtn" type="submit" onClick={this.register} value="Register" />
    );

    let login_register = this.state.loginBtn ? (
      <button className="registerBtn" onClick={() => this.getAction("reg")}>
        Register
      </button>
    ) : (
      <button className="registerBtn" onClick={() => this.getAction("login")}>
        Login
      </button>
    );

    return (
      <div className="form_block">
        <div id="title">{this.state.formTitle}</div>
        <div className="body">
          {errorNotification}
          <form>
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            <div>{submitBtn}</div>
          </form>
          <div>{login_register}</div>
        </div>
      </div>
    );
  }
}

export default TeacherLogin;
