import React, { useContext, useEffect, useState } from 'react'
import EventModal from './EventModal'
import CalendarHeader from './CalendarHeader'
import Sidebar from './Sidebar'
import Month from './Month'
import GlobalContext from '../../context/GlobalContext'
import { getMonth } from '../../util'

function CalendarMain() {
    const [ currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIdx, showEventModal} = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getMonth(monthIdx))
    }, [monthIdx])
  return (
    <div>
    {showEventModal && <EventModal/>}
    <div className='h-screen flex flex-col'>
      <CalendarHeader/>
      <div className='flex flex-1'>
        <Sidebar/>
        <Month month={currentMonth}/>
      </div>
    </div>
  </div>
  )
}

export default CalendarMain