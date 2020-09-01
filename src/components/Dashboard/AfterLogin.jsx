import React from "react";
import firebase from "../Config/Config";
import disableBrowserBackButton from "disable-browser-back-navigation";

function AfterLogin(props) {
  const handleSubmit = () => {
    firebase.logout().then(() => {
      props.history.push("/");
    });
  };
  return (
    <>
      <h1 className="text-center">User is Logged In</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Log Out
        </button>
      </div>
    </>
  );
  disableBrowserBackButton();
}

export default AfterLogin;
