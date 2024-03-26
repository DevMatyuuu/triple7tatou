import React from 'react'
import myPic from '../assets/image-aboutme.webp'

export default function About() {
  return (
    <div className='flex items-start w-full'>
      <div className='w-[50%]'>
        <img src={myPic} alt='image-about-me' className='w-full'/>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center w-[50%] py-48'>
        <h2 className='text-6xl uppercase text-red-700'>About Me</h2>
        <div className='flex flex-col gap-10'>
          <p className='text-xl px-28 text-justify indent-10'>Hey there, I'm Moreno, also known as Mark Jerome, or simply "MJ". I'm a versatile artist, specializing in tattooing, portrait art, and piercing. Currently, I'm pursuing a degree in Multimedia Arts, with a keen focus on honing my skills in graphic design and photography. I'm driven to expand my expertise and gain hands-on experience in these fields.</p>
          <p className='text-xl px-28 text-justify indent-10'>To showcase my talents and build my portfolio for future endeavors, I've created the Triple7Tatou website. It serves as a platform for prospective clients to view my work and will also be a valuable asset when applying for positions as a main artist at tattoo shops.</p>
        </div>
      </div>
    </div>
  )
}
