import { useState, useEffect } from "react";
import ChatArea from "./ChatArea";
import "./ChatBox.css";
import ChatInput from "./ChatInput";
import { useParams } from "react-router";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

const ChatBox = () => {
  const { currentUser } = useAuth();
  const { roomID } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();

  useEffect(() => {
    const q = query(
      collection(db, `rooms/${roomID}/messages`),
      orderBy("timestamp", "asc")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          timestamp: Date(doc.timestamp),
        }))
      );
      console.log(messages);
    });
    return unsub;
  }, [roomID, newMessage]);

  const submitHandler = async (e, input) => {
    e.preventDefault();

    const newMessage = await addDoc(
      collection(db, `rooms/${roomID}/messages`),
      {
        user: currentUser.uid,
        message: input,
        name: currentUser.displayName,
        timestamp: serverTimestamp(),
      }
    );
    setNewMessage(newMessage);
  };

  return (
    <div className="chatbox">
      <ChatArea messages={messages} currentUser={currentUser} />
      <ChatInput submitHandler={submitHandler} />
    </div>
  );
};

export default ChatBox;
