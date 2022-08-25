import React, { useState, useContext, createContext } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
}



export const ContextProvider = ({ children }) => {
    const [activeMenue, setActiveMenue] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    return (<StateContext.Provider value={{ activeMenue, setActiveMenue, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)