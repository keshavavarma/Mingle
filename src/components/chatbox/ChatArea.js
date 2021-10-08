import { useEffect, useRef } from "react";
import "./ChatArea.css";
import Message from "./Message";

const ChatArea = ({ messages, currentUser, roomID }) => {
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
    return console.log("ChatArea cleanup");
  }, [messages]);

  return (
    <div className="chatarea">
      {!roomID && (
        <div className="info">
          You Can Chat only in a Room, Please select a Chat Room or Create a New
          Room
        </div>
      )}
      {messages
        ? messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              receiver={currentUser && currentUser.uid === message.data.user}
              name={message.data.name}
              picture={message.data.picture}
              timestamp={message.timestamp}
              message={message.data.message}
              user={message.data.user}
              currentUser={currentUser}
            />
          ))
        : ""}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatArea;
