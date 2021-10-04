import React from "react";
import ChatBox from "./ChatBox";
import "./MainBody.css";
import Sidebar from "./Sidebar";
const MainBody = () => {
  return (
    <div className="mainbody">
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default MainBody;
