import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'
import TattooGallery from '../components/TattooGallery'

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
        <Contact />
      </div>
    </div>
  )
}
