import React, { useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
export default function ContextWrapper(props) {
    const [monthIdx, setMonthIdx] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [showEventModal, setShowEventModal] = useState(false)
    useEffect(() => {
      if(smallCalendarMonth != null){
        setMonthIdx(smallCalendarMonth)
      }
    }, [smallCalendarMonth])
    
    return (
    <GlobalContext.Provider 
        value={{
            monthIdx, 
            setMonthIdx, 
            smallCalendarMonth, 
            setSmallCalendarMonth, 
            daySelected, 
            setDaySelected,
            showEventModal,
            setShowEventModal
            }}
    >
        {props.children}
    </GlobalContext.Provider>
  )
}
