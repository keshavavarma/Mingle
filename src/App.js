import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import MainBody from "./components/layout/MainBody";
import NavBar from "./components/layout/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
        <Register />
        <NavBar />
        <MainBody />
      </div>
    </AuthProvider>
  );
}

export default App;
