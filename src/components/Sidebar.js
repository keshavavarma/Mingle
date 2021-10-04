import React, { useState } from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import FilterListIcon from "@mui/icons-material/FilterList";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatRoom from "./ChatRoom";
const Sidebar = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="sidebar">
      <div className="chatheader">
        <h2>Chat</h2>
        <div className="chatheader_actions">
          <FilterListIcon />
          <VideocamIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
          <ChatIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
        </div>
      </div>
      <div className="chatrooms">
        <ChatRoom
          selected={selected}
          onClick={(e) => {
            console.log(e.target);
          }}
        />
        <ChatRoom selected={selected} />
        <ChatRoom selected={false} />
        <ChatRoom selected={true} />
        <ChatRoom selected={selected} />
      </div>
    </div>
  );
};

export default Sidebar;
