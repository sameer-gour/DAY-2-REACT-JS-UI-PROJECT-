import React from 'react'
import HeroLeftPart from './HeroLeftPart'
import HeroRightPart from './HeroRightPart'

function Hero() {
  return (
    <div className='h-[85vh] flex'>
        <HeroLeftPart />
        <HeroRightPart />

    </div>
  )
}

export default Hero