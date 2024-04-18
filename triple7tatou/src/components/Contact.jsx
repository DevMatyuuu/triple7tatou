import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='flex justify-center items-center w-full lg:h-[600px] h-[600px] bg-heroBG bg-fixed bg-cover lg:px-0 px-8'>
      <div className='flex lg:flex-row flex-col relative drop-shadow-xl lg:w-[60%] w-full lg:h-96 h-[400px] overflow-hidden rounded-xl bg-[#3d3c3d] group'>
        <div className='flex flex-col'>
          <span className='absolute flex lg:pt-20 xl:text-4xl text-2xl justify-center text-center xl:pt-28 pt-28 text-white z-[1] opacity-90 rounded-xl inset-0.5 px-8 lg:px-0 bg-[#323132] font-[Engraver]'>Need a Tattoo Artist to fulfill your dream tattoo?</span>
          <div class="absolute lg:w-56 lg:h-48 h-60 w-60 bg-white blur-[50px] left-0 lg:group-hover:left-[1000px] duration-500 lg:-top-1/2 -top-60"></div>
          <div class="absolute w-56 h-48 bg-white blur-[50px] right-0 lg:group-hover:right-[1000px] duration-500 lg:-bottom-1/2 -bottom-48"></div>
          <span className='absolute flex justify-center xl:text-base text-sm inset-0.5 xl:pt-[170px] lg:pt-[170px] pt-48 text-white/80 z-[2]'>Say hi to me via Email or Facebook Messenger</span>
        </div>
        <div className='flex mx-auto lg:mt-64 mt-64 xl:gap-10 gap-5 z-40'>
          <a href='https://www.messenger.com/t/101476468943481' target='_blank' rel='noopener noreferrer'><button className='xl:h-10 xl:w-40 h-10 w-28 border-white border-2 text-white hover:bg-white/30 duration-500'>Messenger</button></a>
          <a href='mailto:triple7tatou2020@gmail.com'><button className='xl:h-10 xl:w-40 h-10 w-28 bg-white hover:bg-white/60 hover:text-white duration-300 xl:text-base text-sm'>Email</button></a>
        </div>
      </div>
    </div>
  )
}
