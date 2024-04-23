import React from 'react'
import logo from '../assets/T7T-logo.webp'

export default function Footer() {
   
const currentYear = new Date().getFullYear();

return (
    <div className="flex flex-col gap-10 justify-center items-center w-full pt-20 pb-10 bg-[#3d3c3d] text-white">
      <div className='flex lg:flex-row flex-col items-center lg:items-start mx-auto w-[85%] gap-20 text-center'>
        <div className='flex flex-col items-center gap-6 lg:w-[20%]'>
          <span className='font-[Engraver] text-3xl'>Location</span>
          <p className='text-base'>Samama St. Calzada, Taguig, Philippines</p>
        </div>
        <div className='flex flex-col items-center gap-4 lg:w-[20%]'>
          <span className='font-[Engraver] text-3xl'>Hours</span>
          <div className='flex flex-col'>
            <span>Open 24/7 Daily</span>
            <span>(Monday - Sunday)</span>
          </div>
        </div>
        <img src={logo} alt='logo' className='hidden lg:block lg:w-36 lg:h-24'/>
        <div className='flex flex-col items-center gap-4 lg:w-[20%]'>
          <span className='font-[Engraver] text-3xl'>Contact</span>
          <div className='flex flex-col'>
            <span>MJ Moreno</span>
            <span>09310017746</span>
          </div>
        </div>
        <div className='lg:w-[20%]'>
          <span className='font-[Engraver] text-3xl'>Socials</span>
        </div>
        <img src={logo} alt='logo' className='lg:hidden block h-28'/>
      </div>
      <hr className="h-0.5 bg-white" />  
      <span className="text-center text-sm font-bold text-white/70">
        &copy; {currentYear} Copyright. All rights reserved
      </span>
    </div>
  )
}
