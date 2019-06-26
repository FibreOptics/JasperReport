import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
// import setAuthToken from "./utils/setAuthToken";
import "./App.css";

// Token for user to browse entire app

/* if (localStorage.token) {
  setAuthToken(localStorage.token);
} */

const App = () => {
  return (
    <AuthState>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
