import React from 'react'

export default function Footer() {
   
const currentYear = new Date().getFullYear();

return (
    <div className="flex justify-center items-center w-full py-5 bg-black">
      <hr className=" border-blue-gray-50" />  
      <span className="text-center text-sm font-bold text-white/70">
        &copy; {currentYear} Copyright. All rights reserved
      </span>
    </div>
  )
}
