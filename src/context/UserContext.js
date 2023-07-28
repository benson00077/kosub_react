import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UseContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    user: '',
    jwt: '',
    isLoggedIn: false,
    toggleUpdateMysentence: false,
  })

  return <UserContext.Provider value={[userInfo, setUserInfo]}>{props.children}</UserContext.Provider>
}
