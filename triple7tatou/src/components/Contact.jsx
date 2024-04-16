import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='flex justify-center items-center w-full lg:h-[600px] h-[700px] bg-heroBG bg-fixed bg-cover lg:px-0 px-8'>
      <div className='flex lg:flex-row flex-col relative drop-shadow-xl lg:w-[60%] w-full lg:h-96 h-[500px] overflow-hidden rounded-xl bg-[#3d3c3d] group'>
        <div className='flex flex-col'>
          <span className='absolute flex lg:pt-20 text-4xl justify-center text-center pt-36 text-white z-[1] opacity-90 rounded-xl inset-0.5 px-8 lg:px-0 bg-[#323132] font-[Engraver]'>Need a Tattoo Artist to fulfill your dream tattoo?</span>
          <div class="absolute lg:w-56 lg:h-48 h-60 w-60 bg-white blur-[50px] left-0 lg:group-hover:left-[1000px] duration-500 lg:-top-1/2 -top-60"></div>
          <div class="absolute w-56 h-48 bg-white blur-[50px] right-0 lg:group-hover:right-[1000px] duration-500 lg:-bottom-1/2 -bottom-48"></div>
          <span className='absolute flex justify-center inset-0.5 xl:pt-[140px] lg:pt-[180px] pt-60 text-white/80 z-[2]'>Say hi to me via Email or Facebook Messenger</span>
        </div>
        <div className='flex mx-auto lg:mt-64 mt-80 gap-10 z-40'>
          <button className='h-10 w-40 border-white border-2 text-white hover:bg-white/30 duration-500'>Messenger</button>
          <button className='h-10 w-40 bg-white hover:bg-white/60 hover:text-white duration-300'>Email</button>
        </div>
      </div>
    </div>
  )
}
