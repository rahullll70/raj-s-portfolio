import React from 'react';

const Contact = () => {
  return (
    <main className='flex flex-col w-screen min-h-screen overflow-x-hidden text-white'>
      <div className='px-8 mt-20 md:flex md:items-start md:justify-between font-cartographCF md:px-40 md:mt-40'>
        <div className='gap-2 mb-8 md:grid md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>contact</h1>
          <a className='transition-opacity opacity-50 hover:opacity-100' href='mailto:youremail@gmail.com'>
            shytanimo@gmail.com
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>explore</h1>
          <a className='transition-opacity opacity-50 hover:opacity-100 text-md' href='/'>
            Home
          </a>
          <a className='transition-opacity opacity-50 hover:opacity-100' href='/about'>
            About Me
          </a>
          <a className='transition-opacity opacity-50 hover:opacity-100' href='/projects'>
            Projects
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>hire</h1>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://upwork.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Upwork
          </a>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://fiverr.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Fiverr
          </a>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://freelancer.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Freelancer
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>socials</h1>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://instagram.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://pinterest.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pinterest
          </a>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
          <a
            className='transition-opacity opacity-50 hover:opacity-100'
            href='https://dribbble.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dribbble
          </a>
        </div>
      </div>
      <div className='mt-auto text-center '>
        <h1 className='text-5xl md:text-[210px] font-monumentExtended'>
          ShytAnimo
        </h1>
      </div>
    </main>
  );
};

export default Contact;