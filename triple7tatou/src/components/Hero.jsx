import Lottie from 'lottie-react'
import React from 'react'
import scrollAnimation from '../assets/scroll-animation.json'

export default function Hero() {
  return (
    <div className='flex flex-col bg-heroBG h-[100vh] text-white w-full'>
      <div className='flex flex-col items-center justify-center h-full gap-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl'>Triple7Tatou</h2>
          <h1 className='text-[100px]'>Elevate Your Ink Experience.</h1>
        </div>
        <div className='flex gap-9'>
          <button className='py-4 px-6 border-2 border-white'>VIEW MY WORK</button>
          <button className='py-4 px-9 hover:bg-yellow-500 bg-yellow-600'>CONTACT ME</button>
        </div>
        <Lottie animationData={scrollAnimation} className='absolute bottom-12' />
      </div>
    </div>
  )
}
