import React, { useEffect, useState } from 'react'
import { navLinksLeft, navLinksRight } from '../constants'
import { Divide as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

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
    <div className={`${window.scrollY >= 80 ? 'text-white bg-black/80 duration-500' : 'text-white bg-transparent'} z-50 text-sm flex fixed py-4 lg:py-8 px-8 lg:px-0 w-full text-white`}>
      <div className='flex lg:justify-center justify-between items-center w-full gap-28'>
        <div className='hidden lg:flex items-center gap-28 uppercase'>
          {navLinksLeft.map((link) => (
            <div key={link.id} className='cursor-pointer hover:text-red-500 duration-300'>
              <span>{link.label}</span>
            </div>
          ))}
        </div>
        <span>LOGO</span>
        <div className='lg:hidden block'>
          <Hamburger size={28}/>
        </div>
        <div className='hidden lg:flex items-center gap-28 uppercase'>
          {navLinksRight.map((link) => (
            <div key={link.id} className='cursor-pointer hover:text-red-500 duration-300'>
              <span>{link.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
