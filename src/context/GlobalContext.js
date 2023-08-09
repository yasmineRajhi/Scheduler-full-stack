import React from 'react'

const GlobalContext = React.createContext({
    monthIdx: 0,
    setMonthIdx: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (index) =>{},
    showEventModal: false,
    setShowEventModal: (index) => {}
})

export default GlobalContext;