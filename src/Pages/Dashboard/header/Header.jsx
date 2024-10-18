import React from 'react'
import logo from '../../../assets/react.svg'
const Header = () => {
  return (
    <div className='container '>
            <li className="flex items-center-justify-evenly md:justify-normal bg-primaryColor  w-full overflow-auto">
            <div className="flex w-full">
                <img src={logo} alt="" />
                <span className="flex-1 inline text-center ml-2 space-x-8 text-white sm:flex-col">
                    <span>Leaderboard</span>
                    <span>Profile</span>
                    <span>Settings</span>
                </span>
                <span className="flex-initial inline text-white space-x-7 text-right mr-5">
                     <span className=""><i className='bx bx-user-circle' ></i></span>
                    <span className="text-white" style={{}}><i className='bx bxs-bell-ring'></i></span>
                    <span className="text-white"><i className="far fa-question-circle" ></i></span>
                </span>
            </div>
        </li>

    </div>
  )
}

export default Header
