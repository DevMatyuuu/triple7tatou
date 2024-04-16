import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'
import CategorizedGallery from '../components/CategorizedGallery'

export default function CategorizedTattoos() {
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
        <CategorizedGallery />
        <Contact />
      </div>
    </div>
  )
}