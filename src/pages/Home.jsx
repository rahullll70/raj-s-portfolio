import React from 'react';

const Home = () => {
  return (
    <main className='relative max-h-screen w-screen text-white overflow-x-hidden'>
      {/* <div className='flex items-center justify-center h-20 w-0.5 mx-20 bg-white z-20'></div> */}
      <section>
        <div className='pt-5'>
          <h1 className='text-center text-4xl font-starlightRune'>ShytAnimo</h1>
        </div>
        <div className='bg-secondary h-70 mx-10 rounded-xl flex gap-10 my-10'>
          <h1 className='text-[215px] font-rothefight uppercase px-5 overflow-hidden'>
            visual echo
          </h1>
          <p className='absolute font-cartographCF right-20 uppercase py-5 flex justify-center items-center'>
            online{' '}
            <div className='bg-green-400 animate-pulse w-3 h-3 rounded-full mx-2'></div>
          </p>
          <p className='absolute w-90 pt-35 right-40 font-cartographCF text-sm py-1'>
            I’m Raj, a graphic designer working professionally as ShytAnimo
            (solo designer). I create modern, minimal and aesthetic posters,
            editorial designs, social media visuals, magazine covers, and
            product packaging.
          </p>
        </div>
        <div className='flex items-center justify-center overflow-hidden mx-10 mb-10'>
          <img className='w-300' src='public/images/poster_1.png' alt='poster' />
        </div>
      </section>
    </main>
  );
};

export default Home;
