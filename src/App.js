import './index.css';
import { getMonth } from './util'
import React, { useState, useContext, useEffect } from 'react';
import CalendarHeader from './components/calendar/CalendarHeader';
import Sidebar from './components/calendar/Sidebar';
import Month from './components/calendar/Month';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/calendar/EventModal';
function App() {
  const [ currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIdx, showEventModal} = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx))
  }, [monthIdx])
  
  return (
    <React.Fragment>
      {showEventModal && <EventModal/>}
      <div className='h-screen flex flex-col'>
        <CalendarHeader/>
        <div className='flex flex-1'>
          <Sidebar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;