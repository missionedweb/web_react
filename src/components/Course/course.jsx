import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import firebase from "firebase";
function Course({ match, currentUser }) {
  useEffect(() => {}, []);
  function get() {
    var frankDocRef = firestore.doc(
      "/users/tAjwDa7wirZkmPoLMmgVmfHeqvR2/course/apxBcj6Lr7sSV9HjO3XJ"
    );
    frankDocRef.onSnapshot((doc) => {
      console.log(doc.data());
    });
  }
  return (
    <React.Fragment>
      <h1 style={{ color: "black" }}>{match.params.courseid}</h1>
      <button onClick={get}></button>
    </React.Fragment>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps, null)(Course));
