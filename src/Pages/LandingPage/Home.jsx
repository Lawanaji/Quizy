import React from 'react'
import HeroSection from './HeroSection'
import SubHeroSection from './subHeroSection'
import Features from './Features'
import Comments from './Comments'
import MoreContent from './MoreContent'

const Home = () => {
  return (
    <div className=' relative top-[8rem] h-full w-full'>
        <HeroSection />
        <SubHeroSection />
        <Features />
        <Comments />
        <MoreContent />
    </div>
  )
}

export default Home
