import React, { useEffect, useState } from 'react'
import { navLinksLeft, navLinksRight } from '../constants'
import { Divide as Hamburger } from 'hamburger-react'
import logo from '../assets/T7T-logo.webp'
import { motion } from 'framer-motion'
import { Link as Smooth } from 'react-scroll'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.div 
    initial={{ opacity: 1 }}
    animate={{ opacity: isNavbarVisible ? 1 : 0 }}
    transition={{ duration: 0.3 }} 
    className={`${window.scrollY >= 80 ? 'text-white bg-[#3d3c3d] duration-500' : 'text-white bg-transparent'} ${!isNavbarVisible ? 'bg-transparent' : 'bg-[#3d3c3d]'} z-50 text-sm flex fixed py-4 lg:py-4 px-8 lg:px-0 w-full text-white`}>
      <div className='flex lg:justify-center justify-between items-center w-full gap-28'>
        <div className='hidden lg:flex items-center gap-28 uppercase'>
          {navLinksLeft.map((link) => (
            <div key={link.id} className='cursor-pointer hover:text-red-500 duration-300'>
              <Link to={link.route}>{link.label}</Link>
            </div>
          ))}
        </div>
        <img src={logo} alt='logo' className='lg:h-[75px] h-12 brightness-200'/>
        <div className='lg:hidden block'>
          <Hamburger size={28}/>
        </div>
        <div className='hidden lg:flex items-center gap-28 uppercase'>
          {navLinksRight.map((link) => (
            <div key={link.id} className='cursor-pointer hover:text-red-500 duration-300'>
              <Smooth
              to={link.section} 
              smooth={true} 
              offset={link.offset}
              duration={500}>
                {link.label}
              </Smooth>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
