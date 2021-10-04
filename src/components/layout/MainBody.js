import React from "react";
import ChatBox from "../chatbox/ChatBox";
import "./MainBody.css";
import Sidebar from "../sidebar/Sidebar";
const MainBody = () => {
  return (
    <div className="mainbody">
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default MainBody;
