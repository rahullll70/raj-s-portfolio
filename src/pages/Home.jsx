import React from 'react';
import ScrollVelocity from '../components/ScrollVelocity';

const Home = () => {
  return (
    <main className='relative w-full text-white cursor-none'>
      <section>
        <div className='pt-5'>
          <h1 className='text-4xl text-center lg:text-6xl font-starlightRune'>
            ShytAnimo
          </h1>
        </div>

        <div className='relative p-5 mx-2 my-10 overflow-hidden bg-secondary min-h-72 md:h-80 md:mx-5 rounded-xl md:p-8'>
          <h1 className='text-7xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[200px] md:mt-2 font-rothefight uppercase leading-none'>
            visual echo
          </h1>

          <div className='flex items-center gap-2 mt-16 md:mt-0 md:absolute md:right-10 md:top-8'>
            <p className='flex items-center text-xs uppercase font-cartographCF md:text-lg'>
              online
              <span className='w-3 h-3 ml-2 bg-green-400 rounded-full animate-pulse'></span>
            </p>
          </div>

          <p className='mt-6 md:mt-0 md:absolute md:right-10 md:bottom-1 w-full md:max-w-[600px] lg:max-w-[700px] font-cartographCF text-xs md:text-sm leading-relaxed md:leading-loose tracking-wide bg-secondary'>
            I'm Raj, a graphic designer working professionally as ShytAnimo
            (solo designer). I create modern, minimal and aesthetic posters,
            editorial <br /> designs, social media visuals, magazine covers, and
            product packaging.
          </p>
        </div>

        <div className='flex items-center justify-center mx-2 mb-10 md:mx-10'>
          <img
            className='object-cover w-full max-w-7xl rounded-xl'
            src='/images/poster_1.png'
            alt='poster'
          />
        </div>
        <div>
          <ScrollVelocity
            texts={['RAJ - 2025 - PORTFOLIO - SHYTANIMO -']}
            velocity={100}
            className='py-5 bg-white custom-scroll-text font-monumentExtended text-accent'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
