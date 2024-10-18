import React from 'react'
import Header from './header/Header'

const Dashboard = () => {
  return (
    <div className='w-full relative'>
        <div className='w-full h-[100px] border-b sticky top-0 left-0 z-20 py-2 flex justify-center items-center bg-primaryColor '>
            <Header />
        </div>
        <div className='flex justify-center items-center'>

        </div>
      
    </div>
  )
}

export default Dashboard
