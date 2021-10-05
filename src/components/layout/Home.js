import React from "react";
import MainBody from "./MainBody";
import NavBar from "./NavBar";
import { useAuth } from "../../contexts/AuthContext";
const Home = () => {
  const { currentUser, logout } = useAuth();
  console.log(currentUser.email);
  return (
    <div>
      <NavBar logout={logout} />
      <MainBody />
    </div>
  );
};

export default Home;
