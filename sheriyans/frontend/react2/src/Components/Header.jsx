import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className='p-3 h-10 w-full flex justify-between bg-amber-300'>
            <h1>raj</h1>
            <div className='flex justify-around gap-20'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header