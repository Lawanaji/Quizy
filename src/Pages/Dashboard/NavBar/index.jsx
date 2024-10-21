import React, { useState } from 'react';
import './index.css';
import QuizzyLogo from '../../../assets/quizyLogo.svg';
import ImageIcon from '../../../assets/imageIcon.svg';  
import Notification from '../../../assets/notification.svg';  
import Help from '../../../assets/help.svg';  
import { List, X } from '@phosphor-icons/react';
import Drawer from './Drawer';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-full h-16 flex justify-between bg-customColor md:px-20 py-4">
                <div><img src={QuizzyLogo} alt='Help Icon' /></div>
                <div>
                    <nav className='hidden md:block'>
                        <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Leaderboard</a>
                        <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Profile</a>
                        <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Settings</a>
                    </nav>
                </div>
                <div className='hidden md:block'>
                    <nav className='flex justify-between'>
                        <a href='#' className='mx-2'><img src={ImageIcon} alt='Image Icon' /></a>
                        <a href='#' className='mx-2 mt-1'><img src={Notification} alt='Notification Icon' /> </a>
                        <a href='#' className='mx-2 mt-1'><img src={Help} alt='Help Icon' /> </a>
                    </nav>
                </div>
                <div onClick={toggleDrawer} className='block md:hidden'>
                    {isOpen ? <X size={30} color='#FFFF' /> : <List size={30} color='#FFFF' />}
                </div>
            </div>

            {isOpen && <Drawer isOpen={isOpen} toggleDrawer={!toggleDrawer} />}

            </>
    );
};

export default NavBar;
