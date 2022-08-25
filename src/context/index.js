import React, { useState, useContext, createContext } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notifications: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenue, setActiveMenue] = useState(true)
    return (<StateContext.Provider value={{ activeMenue, setActiveMenue }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)