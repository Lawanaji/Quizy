import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import Mobile from './Mobile';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', label: 'Home', path: '/' },
    { name: 'About', label: 'About', path: '/about' },
    { name: 'Feature', label: 'Features', path: '/features' }
  ];

  const [showMobile, setShowMobile] = useState(false);

  const toggleMenu = () => {
    setShowMobile(!showMobile);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMobile(false);
    }
  };

  // Close mobile menu on window resize (if resized back to desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150 && showMobile) {
        setShowMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMobile]);

  return (
    <>
      {showMobile && <Mobile closeMenu={closeMenuOnMobile} />}
      <div className="bg-primaryColor w-full h-[90px] z-10 fixed top-0 left-0 text-white">
        <div className='container flex justify-between items-center py-5'>
          <img src={logo} alt="Logo" />

          {/* Desktop Navigation */}
          <ul className='hidden md:flex gap-5 font-light text-lg'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Links */}
          <ul className='hidden md:flex items-center text-lg font-semibold justify-center gap-5'>
            <Link to={'/auth/login'}>Login</Link>
            <Link to={'/dashboard'} className='bg-white text-primaryColor font-bold py-2 px-3 rounded-lg'>
              Take A Quiz
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          <div onClick={toggleMenu} className='block md:hidden scale-105 transition duration-300'>
            {showMobile ? <X size={30} color='#FFFF' /> : <List size={30} color='#FFFF' />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
