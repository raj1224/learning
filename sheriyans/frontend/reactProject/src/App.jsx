import React, { useContext, useEffect, useState } from 'react'

import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import Admindashboard from './Components/Dashboard/Admindashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // })
  const [user, setUser] = useState(null)
  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password == '123'){
      console.log("this is Admin");
      setUser('admin')
    }else if(email=='user@me.com' && password=='123'){
      console.log("this is user");
      setUser('employee')
    }else{
      alert("Invalid Credentials")
    }
  }
  const data = useContext(AuthContext)


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin'? <Admindashboard/> :<EmployeDashboard/>}
      {/* <EmployeDashboard/> */}
      {/* <Admindashboard/> */}
    </>
  )
}

export default App