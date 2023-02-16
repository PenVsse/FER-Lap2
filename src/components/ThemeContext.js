import React from 'react'
import { useState, useEffect } from 'react'
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'black'
    },
    light: {
        backgroundColor: '#a3c7d64f',
        color: 'black'
    }
}
const navs = {
    dark: {

        backgroundColor: '#222222',
        color: 'white'
    },
    light: {
        backgroundColor: 'rgb(255, 242, 242)',
        color: 'black'
    }
}
const cards = {
    dark: {

        backgroundColor: '#373739',
        color: 'white'
    },
    light: {
        backgroundColor: '#a5c2d1d4',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    nav: navs.light,
    car: cards.light,
    theme: themes.light,
    toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        //store the state mode to the local storage
        setDark(isDark)
    }, [dark])
    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    const nav = dark ? navs.dark : navs.light
    const card = dark ? cards.dark : cards.light
    return (
        <ThemeContext.Provider value={{ theme, nav, card, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
