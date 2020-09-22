import React from "react";

function Message({ message, timestamp, user }) {
  return (
    <div className="message">
      <div className="message__info">
        <h4>
          {user} <span className="message__timestamp">{timestamp?.toDate().toUTCString()}</span>
        </h4>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Message;
