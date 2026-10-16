import React from 'react'
import {RiArrowRightUpLine} from "@remixicon/react"

function HeroLeftPart() {
  return (
    <div className=' h-full w-[30%] p-10'>
        <h1 className='text-6xl capitalize font-bold pt-10 '>
            Prospective 
            customer
            segmentation
        </h1>
        <p className='capitalize pt-10  '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ex impedit ipsa nihil tempora velit quos rem quod vitae consequatur sint ratione illo excepturi earum, eos vero deserunt tempore corrupti?
        </p>

        <button className='pt-35 active:scale-[1.05]'>
        <RiArrowRightUpLine size={80} /> 
        </button>
    </div>
  )
}

export default HeroLeftPart