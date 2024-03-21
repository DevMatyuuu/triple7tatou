import React from 'react'
import { navLinksLeft, navLinksRight } from '../constants'

export default function Navbar() {
  return (
    <div className='flex fixed py-10 bg-transparent w-full text-white'>
      <div className='flex justify-center w-full gap-28'>
        <div className='flex items-center gap-28 uppercase font-bold'>
          {navLinksLeft.map((link) => (
            <div key={link.id}>
              <span>{link.label}</span>
            </div>
          ))}
        </div>
        <span>LOGO</span>
        <div className='flex items-center gap-28 uppercase font-bold'>
          {navLinksRight.map((link) => (
            <div key={link.id}>
              <span>{link.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
