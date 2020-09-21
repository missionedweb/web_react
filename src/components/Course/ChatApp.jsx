import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";
import { firestore } from "../../firebase/firebase.utils";
import Message from "./Message";
function ChatApp(props) {
  const { courseid } = useParams();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (courseid) {
      firestore
        .collection("course")
        .doc(courseid)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapShot) => setMessages(snapShot.docs.map((doc) => doc.data())));
    }
  }, [courseid]);

  return (
    <div>
      <div className="chat__messages">
        {messages.map(({ message, timestamp, user }, idx) => (
          <Message key={idx} message={message} timestamp={timestamp} user={user} />
        ))}
      </div>

      <ChatInput courseid={courseid} />
    </div>
  );
}

export default ChatApp;
