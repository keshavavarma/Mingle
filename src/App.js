import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import MainBody from "./components/layout/MainBody";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <NavBar />
      <MainBody />
    </div>
  );
}

export default App;
