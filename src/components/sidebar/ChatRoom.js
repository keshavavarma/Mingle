import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./ChatRoom.css";
const ChatRoom = (props) => {
  const [roomName, setRoomName] = useState("Room Name");
  return (
    <div className={props.selected ? "chatroom selected" : "chatroom"}>
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${roomName}.svg`}
        alt="K"
      />
      <div className="chat_info">
        {/* <h3>Room Name</h3> */}
        <input
          className="room_name"
          value={roomName}
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
        />
        <p className="last_message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
          repellendus fuga, reiciendis minus natus!
        </p>
      </div>
    </div>
  );
};

export default ChatRoom;
