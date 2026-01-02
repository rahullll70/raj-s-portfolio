import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Contact from './components/Contact';
import ScrollBar from './components/ScrollBar';
import CustomCursor from './components/CustomCursor';
import ScrollVelocity from './components/ScrollVelocity';
import Loader from './components/Loader';

const App = () => {
  return (
    <Router>
      <Loader className='z-50'>
        <main className='relative w-full min-h-screen overflow-x-hidden cursor-default'>
          <Navbar />
          <div className='hidden md:block'>
            <CustomCursor />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

          <ScrollVelocity />
          <ScrollBar />
        </main>
      </Loader>
    </Router>
  );
};

export default App;
