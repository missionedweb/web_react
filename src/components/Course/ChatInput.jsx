import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import firebase from "firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

function ChatInput({ courseid, currentUser }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    if (courseid) {
      firestore.collection("course").doc(courseid).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: currentUser.displayName,
        userId: currentUser.id,
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(ChatInput);
