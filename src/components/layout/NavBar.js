import React, { useState } from "react";
import "./NavBar.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <div className="search_flex">
        <input className="searchbox" placeholder="Search"></input>
      </div>
      <div className="nav_actions_flex">
        <div className="more_icon_menu">
          <IconButton
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon className="more_icon" sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => setDarkMode(!darkMode)}>
              {!darkMode ? (
                <>
                  <p>Dark</p>
                  <DarkModeIcon sx={{ marginLeft: "0.5rem" }} />
                </>
              ) : (
                <>
                  <p>Light</p>
                  <LightModeIcon
                    sx={{ color: "Orange", marginLeft: "0.5rem" }}
                  />
                </>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              Logout <LogoutIcon sx={{ marginLeft: "0.5rem" }} />
            </MenuItem>
          </Menu>
        </div>
        <Avatar src="" alt="Profile" className="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
