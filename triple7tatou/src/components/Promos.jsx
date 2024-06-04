import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import announceIcon from '../assets/icon-announce.webp'

export default function Promos({promos}) {

  useEffect(() => {
    window.addEventListener("scroll", navBG);
  }, []);

  const navBG = () => {
    if (window.scrollY >= 80) {
      setIsScroll("");
    } else {
      setIsScroll(null);
    }
  };

  return (
    <div className={`${window.scrollY >= 80 ? 'bg-red-500' : 'bg-red-500'} flex items-center lg:w-full lg:h-10`}>
      <Marquee 
      className='flex text-white'
      loop={0}
      autoFill>
        {promos.map((promo) => (
          <div key={promo.id} className='flex items-center mx-10'>
            <img src={announceIcon} alt='announce-icon' className='size-8 mr-2'/>
            <span className='font-bold'>{promo.title}</span>
            <span className='mx-2'>:</span>
            <span>{promo.description}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
