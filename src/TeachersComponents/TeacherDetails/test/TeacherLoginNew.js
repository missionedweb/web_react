import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../../firebase/firebase.utils";

class TeacherLoginNew extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="col-md-8">
        <form style={{ marginLeft: "36em", marginTop: "10em" }}>
          <div class="form-group">
            <h1
              style={{
                color: "#F7781F",
                alignItems: "center",
                marginBottom: "1em",
                marginLeft: "1.35em",
              }}>
              TEACHER LOGIN
            </h1>
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div style={{ marginLeft: "4.3em", marginTop: ".5em" }}>
            <button type="submit" onClick={this.login} class="btn btn-primary">
              Login
            </button>
            <button
              onClick={this.signup}
              style={{ marginLeft: "25px" }}
              className="btn btn-success">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TeacherLoginNew;
