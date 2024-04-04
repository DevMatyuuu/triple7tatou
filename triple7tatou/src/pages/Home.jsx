import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import Contact from '../components/Contact'
import LoaderPage from '../components/LoaderPage'

export default function Home() {
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
        <Hero />
        <Categories />
        <About />
        <Contact />
      </div>
    </div>
  )
}
