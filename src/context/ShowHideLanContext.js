import { createContext, useContext, useState } from 'react'

export const ShowHideContext = createContext()

export const ShowHideLanContextProvider = ({ children }) => {
  const [showLang, setShowLang] = useState({
    ko: true,
    zh: true,
    en: true,
  })
  return <ShowHideContext.Provider value={[showLang, setShowLang]}>{children}</ShowHideContext.Provider>
}

export const useShowHideContext = () => useContext(ShowHideContext)
