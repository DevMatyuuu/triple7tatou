import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <About />
      <Contact />
    </div>
  )
}
