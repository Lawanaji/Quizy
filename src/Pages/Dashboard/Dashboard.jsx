import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


const Dashboard = () => {
  return (
    <div className='w-full relative'>
        <div className='w-full h-[100px] border-b sticky top-0 left-0 z-20 py-2 flex justify-center items-center bg-primaryColor '>
            <NavBar />
        </div>
        <div className='flex justify-center items-center overflow-hidden'>
        <Outlet />
        </div>
      
    </div>
  )
}

export default Dashboard
