import "./ChatArea.css";
import Message from "./Message";

const ChatArea = ({ messages, currentUser }) => {
  return (
    <div className="chatarea">
      {messages
        ? messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              receiver={currentUser.uid === message.data.user}
              name={message.data.name}
              timestamp={message.timestamp}
              message={message.data.message}
            />
          ))
        : ""}
    </div>
  );
};

export default ChatArea;
