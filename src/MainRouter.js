import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import CalendarMain from "./components/calendar/CalendarMain";
import Login from "./components/loginPage/Login.js";
import Profile from "./components/profilePage/Profile";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Home" element={<CalendarMain />} exact />
        <Route path="/UserProfile" element={<Profile />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
