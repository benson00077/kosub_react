import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UseContextProvider = props => {
    const [userInfo, setUserInfo] = useState({
        user: '',
        isLoggedin: false,
        mysentence: { id: [], ko: [], zh: [], en: [] },
        mysentence_number: 0
    })

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            {props.children}
        </UserContext.Provider>
    )
}

