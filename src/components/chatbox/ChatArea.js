import React from "react";
import "./ChatArea.css";
import picture from "../../images/pogba.jpeg";
import Message from "./Message";
const ChatArea = () => {
  return (
    <div className="chatarea">
      <Message receiver={true} />
      <Message receiver={false} picture={picture} />
      <Message receiver={true} picture={picture} />
    </div>
  );
};

export default ChatArea;
