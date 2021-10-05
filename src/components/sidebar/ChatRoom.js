import { Avatar } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";
import { Link } from "react-router-dom";

const ChatRoom = (props) => {
  const roomNameRef = useRef();

  useEffect(() => {
    roomNameRef.current.value = props.name;
  }, []);

  return (
    <Link to={`/rooms/${props.id}`}>
      <div className={props.selected ? "chatroom selected" : "chatroom"}>
        <Avatar
          src={`https://avatars.dicebear.com/api/initials/${props.name}.svg`}
          alt="K"
        />
        <div className="chat_info">
          {/* <h3>Room Name</h3> */}
          <input
            className="room_name"
            ref={roomNameRef}
            onChange={(e) => {
              roomNameRef.current.value = e.target.value;
              props.updateRoomName(e.target.value, props.id);
            }}
          />
          <p className="last_message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
            repellendus fuga, reiciendis minus natus!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ChatRoom;
