import React from 'react';
import TiltedCard from '../components/TiltedCard.jsx';

const Work = () => {
  const items = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <main className='w-screen min-h-screen overflow-x-hidden text-white'>
      <div className='pt-5'>
        <h1 className='text-4xl text-center font-starlightRune'>ShytAnimo</h1>
      </div>

      <div className='flex items-center justify-center mx-2 my-10 overflow-hidden text-center rounded-md bg-secondary h-25 md:h-80 md:mx-10 md:rounded-xl'>
         <h1 className='text-7xl sm:text-7xl md:text-8xl lg:text-[150px] md:mb-12 xl:text-[200px] md:mt-2 font-rothefight uppercase leading-none'>
            all work
          </h1>
      </div>

      {/* Tilted Cards Grid */}
      <div className='grid object-cover grid-cols-1 gap-1 pb-10 mx-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {items.map((item) => (
          <TiltedCard
            key={item}
            imageSrc={`/images/poster_${item}.png`}
            altText={`Poster ${item}`}
            captionText={`CLICK ME!`}
            containerHeight='700px'
            containerWidth='550px'
            imageHeight='100%'
            imageWidth='100%'
            rotateAmplitude={6}
            scaleOnHover={1}
            showTooltip={true}
            displayOverlayContent={true}
          />
        ))}
      </div>
    </main>
  );
};

export default Work;
