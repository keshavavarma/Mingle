import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import {
  doc,
  deleteDoc,
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useHistory } from "react-router";
import { useParams } from "react-router";

const ChatRoom = (props) => {
  const { roomID } = useParams();
  const [hover, setHover] = useState();
  const [lastMessage, setLastMessage] = useState();
  const roomNameRef = useRef();
  const history = useHistory();

  useEffect(() => {
    const q = query(
      collection(db, `rooms/${props.id}/messages`),
      orderBy("timestamp", "desc")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setLastMessage(snapshot.docs[0]?.data().message);
    });
    return unsub;
  }, [props.id]);

  useEffect(() => {
    roomNameRef.current.value = props.name;
    console.log(props.id === roomID);
    return console.log("ChatRoom Clean up");
  }, [props.name]);

  const deleteRoom = async () => {
    // const q = query(collection(db, `rooms/${props.id}/messages`));
    // const unsub = onSnapshot(q, (snapshot) => {
    //   snapshot.docs.forEach(async (document) => console.log(document));
    // });
    await deleteDoc(doc(db, `rooms/${props.id}`));
    history.replace("/");
    // return unsub;
  };
  return (
    <Link to={`/rooms/${props.id}`}>
      <div
        className={roomID === props.id ? "chatroom selected" : "chatroom"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
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
            {lastMessage ? lastMessage : "No Messages"}
          </p>
        </div>
        {hover && props.createdBy === props.currentUser && (
          <IconButton onClick={deleteRoom}>
            <DeleteIcon color="error" />
          </IconButton>
        )}
      </div>
    </Link>
  );
};

export default ChatRoom;
