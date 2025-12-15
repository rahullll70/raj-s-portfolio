import React from 'react';

const Home = () => {
  return (
    <main className='relative w-full text-white'>
      <section>
        <div className='pt-5'>
          <h1 className='text-4xl text-center font-starlightRune'>ShytAnimo</h1>
        </div>
        
        <div className='bg-secondary min-h-[280px] md:h-80 mx-2 md:mx-5 rounded-xl relative overflow-hidden my-10 p-5 md:p-8'>
          <h1 className='text-7xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[200px] md:mt-2 font-rothefight uppercase leading-none'>
            visual echo
          </h1>

          <div className='flex items-center gap-2 mt-16 md:mt-0 md:absolute md:right-10 md:top-8'>
            <p className='flex items-center text-xs uppercase font-cartographCF md:text-lg'>
              online
              <span className='w-3 h-3 ml-2 bg-green-400 rounded-full animate-pulse'></span>
            </p>
          </div>

          <p className='mt-6 md:mt-0 md:absolute md:right-10 lg:right-10 md:bottom-8 lg:bottom-1 md:w-96 lg:w-[480px] font-cartographCF text-xs md:text-sm leading-relaxed'>
            I'm Raj, a graphic designer working professionally as ShytAnimo
            (solo designer). I create modern, minimal and aesthetic posters,
            editorial designs, social media visuals, magazine covers, and
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
      </section>
    </main>
  );
};

export default Home;