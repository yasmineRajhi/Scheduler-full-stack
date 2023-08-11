import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Form,
} from "react-router-dom";
import App from "./App";
import CalendarMain from "./components/calendar/CalendarMain";
import Profile from "./components/profilePage/Profile";
import Form from "./components/loginPage/Form";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/Login" element={<Form />} exact />
        <Route path="/Register" element={<Form />} exact />
        <Route path="/Home" element={<CalendarMain />} exact />
        <Route path="/UserProfile" element={<Profile />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
