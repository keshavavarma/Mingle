import React from "react";
import "./Message.css";
const Message = (props) => {
  return (
    <div className={props.receiver ? "message" : "message sender"}>
      <div className="message_content">
        {props.picture ? (
          <div className="media_container">
            <img src={props.picture} alt="upload"></img>
          </div>
        ) : (
          ""
        )}
        <p className="message_text">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur,
        </p>
      </div>
      <p className="message_timestamp">timestamp</p>
    </div>
  );
};

export default Message;
