import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import FilterListIcon from "@mui/icons-material/FilterList";
import VideocamIcon from "@mui/icons-material/Videocam";
import { IconButton } from "@mui/material";
import ChatRoom from "./ChatRoom";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Sidebar = () => {
  const [selected, setSelected] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState();
  const [updatedName, setUpdatedName] = useState();

  const getRooms = async () => {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    setRooms(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
    console.log(rooms);
  };

  const createRoomHandler = async () => {
    const newRoom = await addDoc(collection(db, "rooms"), {
      roomName: "New Room",
    });
    setNewRoom(newRoom);
  };

  const updateRoomName = async (roomName, id) => {
    const docRef = doc(db, "rooms", id);
    await updateDoc(docRef, {
      roomName: roomName,
    });
    setUpdatedName(roomName);
  };

  useEffect(() => {
    getRooms();
  }, [newRoom, updateRoomName]);

  return (
    <div className="sidebar">
      <div className="chatheader">
        <h2>Chat</h2>
        <div className="chatheader_actions">
          <FilterListIcon />
          <VideocamIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
          <IconButton onClick={createRoomHandler}>
            <ChatIcon sx={{ color: "rgb(97, 100, 166)" }} fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="chatrooms">
        {rooms.map((room) => (
          <ChatRoom
            selected={selected}
            key={room.id}
            id={room.id}
            name={room.data.roomName}
            updateRoomName={updateRoomName}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
