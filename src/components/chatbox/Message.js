import React from "react";
import "./Message.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
const Message = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={props.receiver ? "message" : "message sender"}>
      <div className="messenger">
        <p>{props.name}</p>
        <div className="message_menu">
          <IconButton
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon />
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
            <MenuItem onClick={handleClose}>
              <ReplyIcon color="primary" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StarIcon sx={{ color: "gold" }} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <EditIcon fontSize="small" sx={{ color: "rgb(97, 100, 166)" }} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon color="error" />
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="message_content">
        {props.picture ? (
          <div className="media_container">
            <img src={props.picture} alt="upload"></img>
          </div>
        ) : (
          ""
        )}
        <p className="message_text">{props.message}</p>
      </div>
      <p className="message_timestamp">
        {props.timestamp &&
          new Date(props.timestamp.toDate()).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Message;
