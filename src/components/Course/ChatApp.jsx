import React from "react";
import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";

function ChatApp(props) {
  const { courseid } = useParams();

  return (
    <div>
      <ChatInput courseid={courseid} />
    </div>
  );
}

export default ChatApp;
