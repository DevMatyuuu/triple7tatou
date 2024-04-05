import React from 'react'
import myPic from '../assets/image-aboutme.webp'
import myPicMobile from '../assets/image-aboutmeMobile.webp'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function About() {
  return (
    <div id='about' className='flex lg:flex-row flex-col items-start w-full py-10 lg:py-0 bg-[#3d3c3d] lg:bg-white'>
      <div className='w-[50%] hidden lg:block'>
        <img src={myPic} alt='image-about-me' className='w-full'/>
      </div>
      <h2 className='text-5xl font-[Engraver] text-white lg:hidden text-center w-full pb-10 lg:pb-0'>Meet the Artist</h2>
      <div className='w-full lg:hidden block'>
        <img src={myPicMobile} alt='image-about-me' className='w-full'/>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center lg:w-[50%] lg:py-48 py-10'>
        <h2 className='lg:block hidden text-7xl font-[Engraver] text-red-700'>Meet the Artist</h2>
        <div className='flex flex-col gap-10 lg:text-black text-white'>
          <p className='lg:text-xl lg:px-28 px-8 text-justify indent-10'>Hey there, I'm Moreno, also known as Mark Jerome, or simply "MJ". I'm a versatile artist, specializing in tattooing, portrait art, and piercing. Currently, I'm pursuing a degree in Multimedia Arts, with a keen focus on honing my skills in graphic design and photography. I'm driven to expand my expertise and gain hands-on experience in these fields.</p>
          <p className='lg:text-xl lg:px-28 px-8 text-justify indent-10'>To showcase my talents and build my portfolio for future endeavors, I've created the Triple7Tatou website. It serves as a platform for prospective clients to view my work and will also be a valuable asset when applying for positions as a main artist at tattoo shops.</p>
        </div>
        <div className='flex flex-col px-8 lg:px-28 gap-4 w-full text-white lg:text-black'>
          <span>Social Media Accounts:</span>
          <div className='flex w-full gap-4'>
            <FaFacebookSquare className='size-12 cursor-pointer hover:text-blue-800 duration-300'/>
            <FaInstagramSquare className='size-12 cursor-pointer hover:text-pink-800 duration-300'/>
          </div>
        </div>
      </div>
    </div>
  )
}
