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

    const [currentColor, setCurrentColor] = useState("#03C9D7")
    const [currentMode, setCurrentMode] = useState("Light")
    const [themeSetings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem("themeMode", e.target.value)
        setThemeSettings(false)

    }
    const setColor = (mode) => {
        setCurrentColor(mode)
        localStorage.setItem("themeColor", mode)
        setThemeSettings(false)
    }



    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    return (<StateContext.Provider value={{ activeMenue, setActiveMenue, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, setMode, setColor, currentColor, setCurrentColor, currentMode, setCurrentMode, themeSetings, setThemeSettings }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)