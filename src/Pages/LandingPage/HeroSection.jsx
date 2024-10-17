import React from 'react'
import heroImage from '../../assets/hero-Section.svg'
const HeroSection = () => {
  return (
    <div className=' md:flex text-center md:text-start gap-3 space-y-6 justify-between items-center'>
      <div className='space-y-2 md:space-y-4'>
      <h1 className='text-3xl md:text-6xl text-secondaryColor font-bold leading-tight'>Master Your Knowledge 
      with Quick Quizzes</h1>
      <h2 className='font-semibold text-3xl text-[#764ED7]'>Fun, Fast, and Free!</h2>
      <p className='text-[#442D7C66] #442D7C66'>Challenge yourself, learn new things, and track your progress with our engaging quizzes across various topics!</p>
      <button className='bg-primaryColor text-white font-bold py-2 px-3 rounded-lg'>Take A Quiz</button>

      </div>
      <img src={heroImage} alt="" />
    </div>
  )
}

export default HeroSection
