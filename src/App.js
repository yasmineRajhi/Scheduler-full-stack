import './index.css';
import React, { useState, useContext, useEffect } from 'react';
import Login from './components/loginPage/Login';
import CalendarMain from './components/calendar/CalendarMain';
import MainRouter from './MainRouter';
import Register from './components/loginPage/Register';


function App() {
  
  return (
    <React.Fragment>
      <CalendarMain/>
    </React.Fragment>
  );
}

export default App;