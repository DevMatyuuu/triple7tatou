import React from 'react'

export default function Contact() {
  return (
    <div className='flex justify-center items-center py-16 w-full h-[400px] bg-black'>
      <div className='relative drop-shadow-xl w-[60%] h-64 overflow-hidden rounded-xl bg-[#3d3c3d] group'>
        <span className='absolute flex items-center text-2xl justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]'>Need a Tattoo Artist to</span>
        <div class="absolute w-56 h-48 bg-white blur-[50px] left-0 group-hover:left-[1000px] duration-500 -top-1/2"></div>
        <div class="absolute w-56 h-48 bg-white blur-[50px] right-0 group-hover:right-[1000px] duration-500 -bottom-1/2"></div>
      </div>
    </div>
  )
}
