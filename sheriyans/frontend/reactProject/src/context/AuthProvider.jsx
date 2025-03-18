import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)
    setuserData(getLocalStorage())

    
  return (
    <div>
        <AuthContext.Provider value={"sarthak"}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider