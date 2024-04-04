import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='flex justify-center items-center w-full h-[450px] bg-black'>
      <div className='flex lg:flex-row flex-col relative drop-shadow-xl w-[60%] h-72 overflow-hidden rounded-xl bg-[#3d3c3d] group'>
        <div className='flex flex-col'>
          <span className='absolute flex lg:pt-14 text-3xl justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] font-bold'>Need a Tattoo Artist to fulfill your dream tattoo?</span>
          <div class="absolute w-56 h-48 bg-white blur-[50px] left-0 group-hover:left-[1000px] duration-500 -top-1/2"></div>
          <div class="absolute w-56 h-48 bg-white blur-[50px] right-0 group-hover:right-[1000px] duration-500 -bottom-1/2"></div>
          <span className='absolute flex justify-center inset-0.5 lg:pt-[105px] text-white/80 z-[2]'>Say hi to me via Email or Facebook Messenger</span>
        </div>
        <div className='flex mx-auto lg:mt-44 gap-10 z-40'>
          <button className='h-10 w-40 border-white border-2 text-white hover:bg-white/30 duration-500'>Messenger</button>
          <button className='h-10 w-40 bg-white hover:bg-white/60 hover:text-white duration-300'>Email</button>
        </div>
      </div>
    </div>
  )
}
