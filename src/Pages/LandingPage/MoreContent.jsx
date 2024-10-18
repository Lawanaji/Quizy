import React from 'react'
import heroImage from '../../assets/Hero image.svg'
import heroImageMobile from '../../assets/Hero imagemobile.svg'
import { Link } from 'react-router-dom'
const MoreContent = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between p-5 md:p-0 items-center mb-[8rem]'>
      <img src={heroImage} alt="" className='hidden md:block'/>
      <img src={heroImageMobile} alt="" className='block md:hidden' />

      <div className='border-[#442D7C66] border rounded shadow-lg w-full md:w-[25%] h-full md:h-[10rem] space-y-4 p-5 mx-[6rem]'>
        <h1 className='font-bold text-xl md:font-semibold  md:text-3xl text-[#764ED7]'>Fun, Fast, and Free!</h1>
        <p>One challenge a day, keeps  the doctor away!</p>
        <Link to={'/auth/login'} className='bg-primaryColor text-white font-bold py-2 px-3 mt-5 rounded-lg ' >Start playing today</Link>
      </div>
    </div>
  )
}

export default MoreContent
