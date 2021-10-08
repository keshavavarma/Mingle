import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const NavBar = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const { currentUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = async () => {
    setAnchorEl(null);
    try {
      await props.logout();
      history.push("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log("Ran Navbar again");
    return console.log("unpluged from navbar");
  }, [currentUser]);
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
            <MenuItem onClick={logoutHandler}>
              Logout <LogoutIcon sx={{ marginLeft: "0.5rem" }} />
            </MenuItem>
          </Menu>
        </div>
        <Avatar
          src={
            currentUser &&
            (currentUser.photoURL
              ? currentUser.photoURL
              : `https://avatars.dicebear.com/api/initials/${currentUser.displayName}.svg`)
          }
          className="avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
