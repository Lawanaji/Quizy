import React from 'react';
import QuizzyLogo from '../../../assets/quizyLogo.svg';
import ImageIcon from '../../../assets/imageIcon.svg';  
import Notification from '../../../assets/notification.svg';  
import Help from '../../../assets/help.svg';  

const Drawer = ({ isOpen }) => {

  return (
    <div className='h-screen  flex md:hidden items-center justify-center'>
       
       
        <div className={`fixed top-[80px] right-0 w-3/4 max-w-[300px] text-white bg-primaryColor z-50 h-full px-4 py-3 transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div>
                <nav className='flex flex-col'>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Leaderboard</a>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Profile</a>
                    <a href='#' className='mx-4 text-white text-lg font-light font-Rubik'>Settings</a>
                </nav>
            </div>
            <div className='md:block'>
                <nav className='flex flex-col justify-between'>
                    <a href='#' className='mx-2'><img src={ImageIcon} alt='Image Icon' /></a>
                    <a href='#' className='mx-2 mt-1'><img src={Notification} alt='Notification Icon' /> </a>
                    <a href='#' className='mx-2 mt-1'><img src={Help} alt='Help Icon' /> </a>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Drawer;
