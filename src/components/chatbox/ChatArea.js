import { useEffect, useRef } from "react";
import "./ChatArea.css";
import Message from "./Message";

const ChatArea = ({ messages, currentUser }) => {
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="chatarea">
      {messages
        ? messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              receiver={currentUser && currentUser.uid === message.data.user}
              name={message.data.name}
              timestamp={message.timestamp}
              message={message.data.message}
            />
          ))
        : ""}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatArea;
