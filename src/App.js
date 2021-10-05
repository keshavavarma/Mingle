import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/layout/Home";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatArea from "./components/chatbox/ChatArea";
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/rooms/:roomID" component={Home} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
