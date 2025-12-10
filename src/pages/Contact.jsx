import React from 'react';

const Contact = () => {
  return (
    <main className='relative max-h-screen w-screen text-white overflow-hidden'>
      <div className='pt-5'>
        <h1 className='text-center text-4xl font-starlightRune'>ShytAnimo</h1>
      </div>
      <div className='flex items-start justify-between font-cartographCF px-40 mt-40 uppercase'>
        <div className='grid gap-2'>
          <h1 className='font-monumentExtended text-3xl'>contact</h1>
          <a className='opacity-50' href='mailto:youremail@gmail.com'>
            @gmail.com
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <h1 className='font-monumentExtended text-3xl'>explore</h1>
          <a className='opacity-50' href='/'>
            home
          </a>
          <a className='opacity-50' href='/about'>
            about me
          </a>
          <a className='opacity-50' href='/projects'>
            projects
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <h1 className='font-monumentExtended text-3xl'>hire</h1>
          <a
            className='opacity-50'
            href='https://upwork.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            upwork
          </a>
          <a
            className='opacity-50'
            href='https://fiverr.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            fiverr
          </a>
          <a
            className='opacity-50'
            href='https://freelancer.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            freelancer
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <h1 className='font-monumentExtended text-3xl'>socials</h1>
          <a
            className='opacity-50'
            href='https://instagram.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            instagram
          </a>
          <a
            className='opacity-50'
            href='https://pinterest.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            pinterest
          </a>
          <a
            className='opacity-50'
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin
          </a>
          <a
            className='opacity-50'
            href='https://dribbble.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            dribbble
          </a>
        </div>
      </div>
      <div className='text-center mt-50 overflow-hidden'>
        <h1 className='text-[230px] font-monumentExtended overflow-hidden'>ShytAnimo</h1>
      </div>
    </main>
  );
};

export default Contact;
