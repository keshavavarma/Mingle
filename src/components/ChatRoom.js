import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./ChatRoom.css";
const ChatRoom = (props) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 100));
  }, []);
  return (
    <div className={props.selected ? "chatroom selected" : "chatroom"}>
      <Avatar
        src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}
        alt="K"
      />
      <div className="chat_info">
        <h3>Room Name</h3>
        <p>Last Message...</p>
      </div>
    </div>
  );
};

export default ChatRoom;
