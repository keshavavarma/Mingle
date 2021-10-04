import React from "react";
import "./ChatArea.css";
import picture from "../logo512.png";
import Message from "./Message";
const ChatArea = () => {
  return (
    <div className="chatarea">
      <Message receiver={true} />
      <Message receiver={false} picture={picture} />
      <Message receiver={true} />
    </div>
  );
};

export default ChatArea;
