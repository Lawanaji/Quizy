import React from 'react'
import heroImage from '../../assets/hero-Section.svg'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className=''>
      <div className='container  flex flex-col  md:flex-row text-center md:text-start gap-3 justify-between items-center'>

      <div className='space-y-4 '>
      <h1 className='text-3xl md:text-6xl text-secondaryColor font-bold '>Master Your Knowledge 
      with Quick Quizzes</h1>
      <h2 className='font-semibold text-3xl text-[#764ED7]'>Fun, Fast, and Free!</h2>
      <p className='text-[#442D7C66] text-lg'>Challenge yourself, learn new things, and track your progress with our engaging quizzes across various topics!</p>
      <Link to={'/dashboard'} className='bg-primaryColor text-white font-bold py-2 px-3 rounded-lg relative top-5'>Take A Quiz</Link>
   

      </div>
      <img src={heroImage} alt="" className=' object-contain' />

      </div>
    </div>
  )
}

export default HeroSection
