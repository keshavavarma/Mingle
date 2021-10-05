import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/layout/Home";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
