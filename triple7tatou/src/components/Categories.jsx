import React from 'react'
import useTattooCategories from '../hooks/useTattooCategories'
import { Link } from 'react-router-dom';

export default function Categories() {

  const { tattooCategories } = useTattooCategories();

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='flex lg:flex-row flex-col items-center justify-between lg:h-[500px] w-full font-[Engraver]'>
        {tattooCategories.map((category)  => (
          <Link to={`/tattoo/${category.label}`} onClick={scrollToTop} className='flex justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 border-black w-full group overflow-hidden duration-500 cursor-pointer h-full'>
            <img src={category.image} loading='lazy' alt='category-1' className='h-full w-full group-hover:scale-110 duration-500 group-hover:brightness-75 brightness-50'/>
            <span className='absolute text-white text- first-letter:uppercase text-6xl'>{category.label} Tattoo</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
