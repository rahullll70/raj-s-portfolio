import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get current location
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <nav className='fixed right-0 top-1/2 -translate-y-1/2 z-20 pr-10'>
      <div className='font-monumentExtended text-md flex flex-col items-end gap-6'>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className='text-white group relative px-10'
          >
            {link.name} 
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-light transition-all duration-300 
              ${
                location.pathname === link.path
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;