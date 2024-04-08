import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tattoos from './pages/Tattoos'


export default function App() {
  return (
    <div className='font-voces'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tattoo" element={<Tattoos />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
