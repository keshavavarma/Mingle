import { useState, useEffect } from "react";
import "./ChatInput.css";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
import EmojiPicker from "emoji-picker-react";
import LinearProgress from "@mui/material/LinearProgress";
import DoneIcon from "@mui/icons-material/Done";

const ChatInput = (props) => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState();
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setInput(input + emojiObject.emoji);
  };

  const uploadPicture = async () => {
    // e.preventDefault();
    setLoading(true);
    console.log(photo);
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "pixtagram");
    data.append("cloud_name", "cr7");
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/cr7/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response || !response.ok) {
        const error = await response.json();
        throw new Error("Picture Not Updated");
      }
      const output = await response.json();
      setUrl(output.url);
      setLoading(false);
      console.log("picture uploaded to cloudinary successfully", output.url);
      // setSuccess("Picture Updated");
    } catch (err) {
      // setError(err.message);
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (photo) {
      uploadPicture();
    }
    return console.log("ChatInput cleanup Done");
  }, [photo]);

  return (
    <div className="chatinput">
      <form
        className="message_form"
        onSubmit={(e) => {
          props.submitHandler(e, input, url);
          setInput("");
          setUrl("");
          setEmojiOpen(false);
        }}
      >
        <div
          className="chatbox__emoji"
          style={emojiOpen ? { height: "250px" } : { height: "0px" }}
        >
          <EmojiPicker
            disableSearchBar
            disableSkinTonePicker
            onEmojiClick={onEmojiClick}
            pickerStyle={{ width: "100%" }}
          />
        </div>
        {loading && <LinearProgress color="secondary" />}
        <input
          value={input}
          className="message_input"
          placeholder="Type Message Here"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <div className="message_actions">
          <div className="message_emojis">
            <IconButton
              onClick={() => {
                setEmojiOpen(!emojiOpen);
              }}
            >
              <InsertEmoticonIcon sx={{ color: "rgb(97, 100, 166)" }} />
            </IconButton>
            <button>
              <GifIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
            </button>
            <IconButton>
              <label
                htmlFor="fileUpload"
                // className="fileUploadLabel"
                role="button"
              >
                <AttachFileIcon sx={{ color: "rgb(97, 100, 166)" }} />
                <input
                  id="fileUpload"
                  className="fileUpload"
                  type="file"
                  accept=".jpeg,.jpg,.png"
                  onChange={(e) => {
                    if (e.target.files[0] === undefined) {
                      console.log(e.target.files[0], "selected undefined file");
                      setPhoto("");
                    } else {
                      console.log(e.target.files[0]);
                      setPhoto(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </IconButton>
            {url && (
              <>
                <DoneIcon sx={{ color: "rgb(97, 100, 166)" }} />{" "}
                <span>{photo.name}</span>
              </>
            )}
          </div>
          <button type="submit" disabled={loading}>
            <SendIcon sx={{ color: "rgb(97, 100, 166)" }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
