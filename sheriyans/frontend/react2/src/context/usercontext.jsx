import React, { createContext } from 'react'
export const DataContext = createContext()

const usercontext = ({children}) => {
    const username= "raj"

  return (
    <div>
        <DataContext.Provider value = {username}>
            {children}
        </DataContext.Provider>
        
    </div>
  )
}

export default usercontext