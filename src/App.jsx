import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
    <main className='relative w-screen overflow-x-hidden min-h-screen h-full overflow-y-auto cursor-default scroll-smooth'>
      <Navbar />
      
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<AboutMe />} />
    <Route path='work' element={<Work />} />

    </Routes>
    <Contact />
    </main>
    </Router>
  )
}

export default App