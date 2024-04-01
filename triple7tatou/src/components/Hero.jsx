import Lottie from 'lottie-react'
import React from 'react'
import scrollAnimation from '../assets/scroll-animation.json'

export default function Hero() {

  return (
    <div className='flex flex-col bg-heroBG bg-cover h-[100vh] text-white w-full px-8 lg:px-0'>
      <div className='flex flex-col items-center lg:justify-center pt-40 lg:pt-0 h-full gap-10'>
        <div className='flex flex-col items-center'>
          <h2 className='lg:text-2xl'>Triple<span className='text-red-500'>7</span>Tatou</h2>
          <h1 className='text-[60px] lg:text-[100px] text-center shadow-2xl'>Elevate Your Ink Experience.</h1>
        </div>
        <div className='flex lg:flex-row flex-col gap-9 w-full lg:w-auto'>
          <button className='py-4 px-6 lg:text-base text-sm border-2 border-white hover:bg-white/20 duration-300 shadow-2xl'>VIEW MY WORK</button>
          <button className='py-4 px-9 lg:text-base text-sm hover:bg-red-500 bg-red-700 duration-300 shadow-2xl'>CONTACT ME</button>
        </div>
        <Lottie animationData={scrollAnimation} className='absolute bottom-12'/>
      </div>
    </div>
  )
}
