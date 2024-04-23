import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'
import PiercingGallery from '../components/PiercingGallery'


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
        <PiercingGallery />
        <Contact />
      </div>
    </div>
  )
}
