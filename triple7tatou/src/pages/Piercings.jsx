import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'
import Gallery from '../components/TattooGallery'

export default function Piercings() {
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
        <Gallery />
        <Contact />
      </div>
    </div>
  )
}
