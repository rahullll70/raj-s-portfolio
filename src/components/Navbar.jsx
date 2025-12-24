import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Slant as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav className='fixed right-0 z-20 hidden pr-10 -translate-y-1/2 lg:block top-1/2'>
        <div className='flex flex-col items-end gap-6 font-monumentExtended text-md'>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className='relative px-0 text-white group'
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 origin-right
                ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className='fixed top-0 right-0 z-50 lg:hidden bg-accent'>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color='#ffffff'
          size={28}
          duration={0.3}
        />
      </div>

      {/* Mobile Menu - Slides from Right */}
      <nav
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full pt-10 sm:h-[50%] sm:w-[85%] md:w-[70%] bg-black z-40 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transform: isOpen
            ? 'translateX(0) translateZ(0)'
            : 'translateX(100%) translateZ(0)',
        }}
      >
        <div className='flex flex-col items-start justify-center h-full px-8 sm:px-12 md:px-16'>
          {/* Menu Links */}

          <div className='w-full space-y-4'>
            {links.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block relative text-white font-monumentExtended text-4xl sm:text-5xl md:text-6xl uppercase leading-tight transition-all duration-300 group ${
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className='inline-block w-3 h-3 ml-4 align-middle bg-white rounded-full'></span>
                )}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 origin-right
         ${
           location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
         }`}
                ></span>
              </NavLink>
            ))}
          </div>

          {/* Bottom Tagline */}
          <div
            className={`mt-auto pb-12 transition-all duration-500 ${
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
          >
            <p className='text-sm tracking-wider uppercase text-white/50 font-cartographCF'>
              Let's plan your next project
            </p>
          </div>
        </div>
      </nav>

      {/* Overlay - Click to close */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full bg-black/70 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
