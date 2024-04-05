import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'
import Gallery from '../components/Gallery'

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
        <Gallery />
        <Contact />
      </div>
    </div>
  )
}
