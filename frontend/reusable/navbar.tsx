import React from 'react'

export default function navbar() {
  return (
    <div className="container brightness-400 flex h-14 max-w-screen-2xl items-center p-4 border-solid border-b-2 mb-4 ">
      <div className='font-mono font-bold mx-8'>
        r/P
      </div>

      <ul >
        <li className='navbar-item'>Home</li>
        <li className='navbar-item'>About Us</li>
        <li className='navbar-item'>Calendar</li>
      </ul>

    
    </div>
  )
}
