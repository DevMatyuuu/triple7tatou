import React from 'react'
import category1 from '../assets/image-category1.webp'
import category2 from '../assets/image-category2.webp'
import category3 from '../assets/image-category3.webp'

export default function Categories() {
  return (
    <div>
      <div className='flex lg:flex-row flex-col items-center justify-between lg:h-[500px] w-full'>
        <div className='flex justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 border-black w-full group overflow-hidden duration-500 cursor-pointer h-full'>
          <img src={category1} alt='category-1' className='h-full w-full group-hover:scale-110 duration-500 group-hover:brightness-75 brightness-50'/>
          <span className='absolute text-white font-semibold text-4xl uppercase'>Customized Tattoo</span>
        </div>
        <div className='flex justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 border-black w-full group overflow-hidden duration-500 cursor-pointer h-full'>
          <img src={category2} alt='category-2' className='h-full w-full group-hover:scale-110 duration-500 group-hover:brightness-75 brightness-50'/>
          <span className='absolute text-white font-semibold text-4xl uppercase text-center'>Minimalist Tattoo</span>
        </div>
        <div className='flex justify-center items-center w-full group overflow-hidden duration-500 cursor-pointer h-full'>
          <img src={category3} alt='category-1' className='h-full w-full group-hover:scale-110 duration-500 group-hover:brightness-75 brightness-[45%]'/>
          <span className='absolute text-white font-semibold text-4xl uppercase'>Realistic Tattoo</span>
        </div>
      </div>
    </div>
  )
}
