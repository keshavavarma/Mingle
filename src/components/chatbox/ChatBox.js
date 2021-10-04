import React from "react";
import ChatArea from "./ChatArea";
import "./ChatBox.css";
import ChatInput from "./ChatInput";
const ChatBox = () => {
  return (
    <div className="chatbox">
      <ChatArea />
      <ChatInput />
    </div>
  );
};

export default ChatBox;
