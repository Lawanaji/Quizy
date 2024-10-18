import React from 'react'
import './index.css'
import QuizzyLogo  from "../../assets/quizyLogo.svg";
import ImageIcon  from "../../assets/imageIcon.svg";
import Notification  from "../../assets/notification.svg";
import Help  from "../../assets/help.svg";

const NavBar = () => {
    return (
        <div className="w-full h-16 flex justify-between bg-customColor px-20 py-4 lg:w-auto">
            <div><img src={QuizzyLogo} alt="Quizy icon" /></div>
            <div>
                <nav>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Leaderboard</a>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Profile</a>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Settings</a>
                </nav>
            </div>
            <div>
                <nav className='flex justify-between'>
                    <a href='#' className='mx-2'><img src={ImageIcon} alt="Image icon" /></a>
                    <a href='#' className='mx-2 mt-1'><img src={Notification} alt="Notification icon" /> </a>
                    <a href='#' className='mx-2 mt-1'><img src={Help} alt="Help icon" /> </a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
