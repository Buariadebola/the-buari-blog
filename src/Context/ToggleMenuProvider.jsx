import React, { createContext, useState } from 'react'

const ToggleMenuContext = createContext();

const ToggleMenuProvider = ({children}) => {

    const [increaseMenubar, setIncreaseMenubar] = useState(true);
    const [showSearch, setShowSearch] = useState(false);

    const handleToggle = () => {
        setIncreaseMenubar(! increaseMenubar)
    }

    const handleSearchBox = () => {
        setShowSearch(! showSearch)
    }

  return (
    <ToggleMenuContext.Provider value={{ handleToggle, increaseMenubar, handleSearchBox, showSearch, setShowSearch }}>
        {children}
    </ToggleMenuContext.Provider>
  )
}

export {ToggleMenuProvider, ToggleMenuContext}
