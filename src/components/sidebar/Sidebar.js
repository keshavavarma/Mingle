import React, { useEffect, useState } from "react";
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
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { currentUser } = useAuth();
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState();
  const [updatedName, setUpdatedName] = useState();

  const createRoomHandler = async () => {
    const newRoom = await addDoc(collection(db, "rooms"), {
      roomName: "New Room",
      createdBy: currentUser.uid,
      timestamp: serverTimestamp(),
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
    const q = query(collection(db, "rooms"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsub;
  }, [newRoom, updatedName, rooms]);

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
            key={room.id}
            id={room.id}
            name={room.data.roomName}
            createdBy={room.data.createdBy && room.data.createdBy}
            currentUser={currentUser.uid}
            updateRoomName={updateRoomName}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
