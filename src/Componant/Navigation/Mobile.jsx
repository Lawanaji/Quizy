import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'
const Mobile = () => {
    const navLink =[
        {name: 'Home',label: 'Home', path: '/'},{name: 'About', label:'About', path: '/'},
        {name: 'Feature', label: 'Features', path: 'features'}

    ]

    

  return (
    <div className={`bg-primaryColor w-full h-[300px] shadow-lg z-10 fixed top-[90px] left-0 text-white`}>
    <div className='container grid justify-between items-center py-5'>
   
      <ul className='grid md:hidden gap-5 font-light text-lg'>
         {navLink.map((index)=>(
          <Link className='transform transition-transform duration-200 hover:scale-105' to={index.path}>{index.label}</Link>
         ))}
      </ul>
          <ul className='grid md:hidden  items-center text-lg font-semibold justify-center gap-5'>
              <Link  className='transform transition-transform  mt-5 duration-200 hover:scale-105' to={'/auth/login'}>Login</Link>
            <Link  to={'/dashboard'} className='bg-white transform transition-transform duration-200 hover:scale-105 text-primaryColor font-bold py-2 px-3 rounded-lg'>Take A Quiz</Link>
          </ul>

    </div>
  </div>
  )
}

export default Mobile
