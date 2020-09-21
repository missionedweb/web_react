import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import firebase from "firebase";
import ChatApp from "./ChatApp";
import { useParams } from "react-router-dom";

function Course({ currentUser }) {
  const { courseid } = useParams();

  return (
    <React.Fragment>
      <div>
        <h1 style={{ color: "black" }}>{courseid}</h1>
        <ChatApp />
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(Course);
