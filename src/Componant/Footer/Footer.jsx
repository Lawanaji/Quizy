import React from 'react'
import logo from '../../assets/quizyLogo.svg'
import google from '../../assets/flat-color-icons_google.svg'
import facebook from '../../assets/brandico_facebook.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full h-auto md:h-[120px] bg-primaryColor py-5 text-center text-white '>
      <div className='container'>


          <ul className=' flex flex-col md:flex-row justify-center gap-10 '>
            <Link>Tools</Link>
            <Link>FAQ</Link>
            <Link>Privacy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Contact</Link>
          </ul>
      <div className='flex justify-between items-center'>
        <img src={logo} alt="" />
        <div className='flex'>
          <img src={google} alt="" />
          <img src={facebook} alt="" />
        </div>

      </div>
        <strong className='text-center'>&copy; 2024</strong>
        

      </div>
      
    </div>
  )
}

export default Footer
