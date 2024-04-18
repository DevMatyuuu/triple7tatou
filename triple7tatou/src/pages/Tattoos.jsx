import React, { useEffect, useState } from 'react'
import LoaderPage from '../components/LoaderPage'
import TattooGallery from '../components/TattooGallery'
import Contact from '../components/Contact'
import About from '../components/About'


export default function Tattoos() {
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setTimeout(() => {   
      setLoading(false)   
    }, 1000)
  }, []) 
    
  return (
    <div>
      <LoaderPage loading={loading}/>
      <div>
        <TattooGallery />
        <About/>
        <Contact />
      </div>
    </div>
  )
}
