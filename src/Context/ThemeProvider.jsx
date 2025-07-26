import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [clicked, setClicked] = useState(false);

    useEffect (() => {
        const storedThemeColor = setTheme(theme);
        if (storedThemeColor) (
            setTheme(storedThemeColor)
        )
    }, [theme])

    useEffect (() => {
        document.body.classList.toggle('dark', theme === 'dark')
    }, [theme]);

    const themeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.getItem(theme)
    }

    const handleColor = () => {
      setClicked(! clicked)
    }

  return (
    <ThemeContext.Provider value={{themeToggle, theme, handleColor, clicked}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext}
