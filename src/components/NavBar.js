import React from "react";
import "./NavBar.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="search_flex">
        <input className="searchbox" placeholder="Search"></input>
      </div>
      <div className="nav_actions_flex">
        <MoreHorizIcon className="more_icon" />
        <Avatar src="" alt="Profile" className="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
