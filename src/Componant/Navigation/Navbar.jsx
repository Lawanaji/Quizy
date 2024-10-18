import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'
const Navbar = () => {
    const navLink =[
        {name: 'Home',label: 'Home', path: '/'},{name: 'About', label:'About', path: '/'},
        {name: 'Feature', label: 'Features', path: 'features'}

    ]
  return (
    <div className="bg-primaryColor w-full h-[90px] z-10 fixed top-0 left-0 text-white">
      <div className='container flex justify-between items-center py-5'>
        <img src={logo} alt="" />
        <ul className='hidden md:flex gap-5 font-light text-lg'>
           {navLink.map((index)=>(
            <Link to={index.path}>{index.label}</Link>
           ))}
        </ul>
            <ul className='hidden md:flex items-center text-lg font-semibold justify-center gap-5'>
                <Link to={'/auth/login'}>Login</Link>
                <Link className='bg-white text-primaryColor font-bold py-2 px-3 rounded-lg' to={'/question'}>Take A Quiz</Link>
            </ul>

      </div>
    </div>
  )
}

export default Navbar
