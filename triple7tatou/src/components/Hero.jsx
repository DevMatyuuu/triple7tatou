import Lottie from 'lottie-react'
import React from 'react'
import scrollAnimation from '../assets/scroll-animation.json'

export default function Hero() {

  return (
    <div className='flex flex-col bg-heroBG bg-fixed bg-cover h-[100vh] text-white w-full px-8 lg:px-0'>
      <div className='flex flex-col items-center lg:justify-center pt-56 lg:pt-0 h-full gap-10'>
        <div className='flex flex-col items-center lg:px-16'>
          <h2 className='lg:text-2xl'>Triple7Tatou</h2>
          <h1 className='text-[60px] lg:text-[100px] text-center shadow-2xl'>Elevate Your Ink Experience.</h1>
          <h2 className='lg:text-xl lg:pt-0 pt-5'>Tattoo & Piercing by <span className='underline underline-offset-2 cursor-pointer hover:text-red-500 duration-300'>MJ Moreno</span></h2>
        </div>
        <div className='flex lg:flex-row flex-col gap-7 w-full lg:w-auto lg:pt-0 pt-14'>
          <button className='py-4 px-6 lg:text-base text-sm border-2 border-white hover:bg-white/20 duration-300 shadow-2xl'>VIEW MY WORK</button>
          <button className='py-4 px-9 lg:text-base text-sm hover:bg-red-500 bg-red-700 duration-300 shadow-2xl'>CONTACT ME</button>
        </div>
        <Lottie animationData={scrollAnimation} className='absolute bottom-12'/>
      </div>
    </div>
  )
}
