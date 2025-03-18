import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeDashboard