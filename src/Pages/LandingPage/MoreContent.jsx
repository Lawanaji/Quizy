import React from 'react'
import heroImage from '../../assets/Hero image.svg'
import heroImageMobile from '../../assets/Hero imagemobile.svg'
const MoreContent = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between  items-center mb-[8rem]'>
      <img src={heroImage} alt="" className='hidden md:block'/>
      <img src={heroImageMobile} alt="" className='block md:hidden' />

      <div className='border-[#442D7C66] border rounded shadow-lg md:w-[25%] h-[10rem] p-5 mx-[6rem]'>
        <h1 className='font-semibold text-3xl text-[#764ED7]'>Fun, Fast, and Free!</h1>
        <p>One challenge a day, keeps  the doctor away!</p>
        <button className='bg-primaryColor text-white font-bold py-2 px-3 mt-8 rounded-lg w-full' >Start playing today</button>
      </div>
    </div>
  )
}

export default MoreContent
