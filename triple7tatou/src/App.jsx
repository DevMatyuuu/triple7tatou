import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tattoos from './pages/Tattoos'
import CategorizedTattoos from './pages/CategorizedTattoos'
import Piercings from './pages/Piercings'


export default function App() {
  return (
    <div className='font-voces'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tattoo" element={<Tattoos />} />
            <Route path="/piercing" element={<Piercings />} />
            <Route path="/tattoo/:label" element={<CategorizedTattoos />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
