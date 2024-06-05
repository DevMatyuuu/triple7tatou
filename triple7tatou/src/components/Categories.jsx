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
      <div className='flex lg:flex-row flex-col items-center justify-between 2xl:h-[500px] lg:h-[350px] xl:h-[400px] w-full font-[Engraver]'>
        {tattooCategories.map((category)  => (
          <Link key={category.id} to={`/tattoo/${category.label}`} onClick={scrollToTop} className={`${category.id === 4 ? 'hidden' : 'flex'} justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 border-black w-full group overflow-hidden duration-500 cursor-pointer h-full`}>
            <img src={category.image} loading='lazy' alt={category.label} className='h-full w-full group-hover:scale-110 duration-500 group-hover:brightness-75 brightness-50'/>
            <span className='absolute text-white first-letter:uppercase xl:text-6xl text-5xl text-center'>{category.label} Tattoo</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
