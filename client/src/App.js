import React, { useState, useEffect } from "react";
import './App.css';
// import Layout from './layout/Layout';
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import Home from "./components/screens/Home";
import EventDashboard from "./components/screens/EventDashboard";
import EventCard from "./components/screens/EventCard";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    // <Layout
    // currentUser={currentUser}
    // handleLogout={handleLogout}
    // >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login">
        <Login handleLogin={handleLogin} />
      </Route>
      <Route exact path="/register">
        <Register handleRegister={handleRegister} />
      </Route>
      <Route exact path="/causes/:id" component={EventDashboard}/>
      {/* <Route exact path="/create" component={Create} /> */}
      {/* <Route exact path="/events/edit:id" component={Edit} /> */}
      <Route exact path="/events/:id" component={EventCard} />
    </Switch>

    // {/* </Layout> */}
  );
}

export default App;
