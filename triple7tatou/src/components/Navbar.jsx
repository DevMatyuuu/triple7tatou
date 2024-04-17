import React, { useEffect, useState } from 'react'
import { navLinksRight, servicesDropdown } from '../constants'
import { Divide as Hamburger } from 'hamburger-react'
import logo from '../assets/T7T-logo.webp'
import { motion } from 'framer-motion'
import { Link as Smooth } from 'react-scroll'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";

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

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <motion.div 
    initial={{ opacity: 1 }}
    animate={{ opacity: isNavbarVisible ? 1 : 0 }}
    transition={{ duration: 0.3 }} 
    className={`${window.scrollY >= 80 ? 'text-white bg-[#3d3c3d] duration-500' : 'text-white bg-transparent'} z-50 text-base flex fixed py-8 lg:py-4 px-8 lg:px-0 w-full text-white`}>
      <div className='flex lg:justify-center justify-between items-center w-full gap-28'>
        <div className='hidden lg:flex items-center gap-28 uppercase'>
            <Link to={'/'} onClick={scrollToTop} className='cursor-pointer hover:text-red-500 duration-300'>
              Home
            </Link>
            <div className='relative cursor-pointer duration-300 group'>
              <div className='flex items-center gap-1'>
              <span>Services</span>
              <MdKeyboardArrowDown className='size-5'/>
              </div>
              <div className={`${window.scrollY >= 80 ? 'text-white bg-[#3d3c3d] duration-500 pt-10 px-2' : 'text-white bg-transparent pt-5'} flex flex-col absolute w-32 text-white`}>
                {servicesDropdown.map((dropdown) => (
                  <div className='hidden text-base group-hover:flex flex-col w-full text-white'>
                    <Link to={dropdown.route} onClick={scrollToTop} className={`${window.scrollY >= 80 ? 'hover:bg-[#525152] hover:rounded-lg pl-3' : 'hover:text-red-500'} py-2 text-start mb-5`}>{dropdown.label}</Link>
                  </div>
                ))}
              </div>
            </div>
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
