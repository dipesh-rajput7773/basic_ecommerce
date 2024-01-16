import React from 'react'

import HeroSec from './Layouts/HeroSec'
import Category from './Layouts/Category'
import Believe from './components/Believe'
import Marquee from './components/Marquee'
import ReviewSection from './components/ReviewSection'


function Home() {
  return (
    <>



      <HeroSec />
      <Marquee />
      <Category />
      <Believe />
      <ReviewSection />
      <Marquee />
    </>
  )
}

export default Home