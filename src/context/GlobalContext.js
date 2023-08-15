import React from 'react'

const GlobalContext = React.createContext({
    monthIdx: 0,
    setMonthIdx: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (index) =>{},
    showEventModal: false,
    setShowEventModal: (index) => {},
    dispatchCallEvent : (type, payload) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export default GlobalContext;