import React from 'react';

const Hero = () => {
  return (
    <div>
      <section>
        <div className='flex items-center justify-center gap-6 pt-5 md:flex-row md:gap-8'>
          <img
            src='/images/header_design.png'
            alt=''
            className='w-xl lg:w-3xl fill-white grayscale'
          />

          <h1 className='text-4xl text-center lg:text-6xl font-starlightRune'>
            ShytAnimo
          </h1>
          
          <img
            src='/images/header_design.png'
            alt=''
            className='w-xl lg:w-3xl fill-white grayscale scale-x-[-1]'
          />
        </div>
        <div className='relative p-5 mx-2 my-10 overflow-hidden bg-secondary min-h-72 md:h-80 md:mx-5 rounded-xl md:p-8 '>
          <h1 className='text-[53px] xs:text-5xl md:text-9xl lg:text-[150px] xl:text-[200px] md:mt-2 font-rothefight uppercase leading-none'>
            portfolio..
          </h1>
          <div className='absolute overflow-hidden shadow-white right-5 w-30 top-28 md:bottom-auto md:top-5 md:h-full md:w-auto md:right-35'>
  <img src='/images/mountains.gif' alt='' className='rounded-xl md:w-lg shadow-[9px_7px_5px2px#6e6e6e]' />
</div>

          <div className='flex items-center gap-2 mt-16 md:mt-0 md:absolute md:right-8 md:top-3'>
            <p className='flex items-center text-xs uppercase font-cartographCF md:text-lg'>
              online
              <span className='w-3 h-3 ml-2 bg-green-400 rounded-full animate-pulse'></span>
            </p>
          </div>

          <p className='mt-6 md:mt-0 md:absolute md:right-0 md:bottom-1 w-full md:max-w-[700px] lg:max-w-[650px] font-cartographCF text-xs md:text-sm leading-relaxed md:leading-loose tracking-wide bg-secondary'>
            I'm Raj, a graphic designer working professionally  as
            ShytAnimo (solo designer). I create modern,
            minimal and aesthetic posters, editorial designs, social
            media visuals, magazine covers, and product packaging.
          </p>
        </div>

        <div className='flex items-center justify-center mx-2 mb-10 md:mx-10'>
          <video
            className='object-cover w-full rounded-lg '
            src='/videos/hero_video.mp4'
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
