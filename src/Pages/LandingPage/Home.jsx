import React from 'react'
import HeroSection from './HeroSection'
import SubHeroSection from './subHeroSection'
import Features from './Features'
import Comments from './Comments'

const Home = () => {
  return (
    <div className=' relative top-[8rem] h-full w-full snap-none'>
        <div className='container'>
        <HeroSection />
        <SubHeroSection />
        </div>
        <Features />
        <Comments />
    </div>
  )
}

export default Home
