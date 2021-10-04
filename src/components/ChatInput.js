import React from "react";
import "./ChatInput.css";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
const ChatInput = () => {
  return (
    <div className="chatinput">
      <form className="message_form">
        <input
          className="message_input"
          placeholder="Type Message Here"
        ></input>
        <div className="message_actions">
          <div className="message_emojis">
            <button>
              <InsertEmoticonIcon sx={{ color: "rgb(97, 100, 166)" }} />
            </button>
            <button>
              <GifIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
            </button>
            <button>
              <AttachFileIcon sx={{ color: "rgb(97, 100, 166)" }} />
            </button>
          </div>
          <button type="submit">
            <SendIcon sx={{ color: "rgb(97, 100, 166)" }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
