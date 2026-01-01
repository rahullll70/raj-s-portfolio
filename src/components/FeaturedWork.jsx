import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const ImageWithTooltip = ({ num, prefix }) => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className='relative flex-shrink-0'
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={`/images/poster_${num}.jpg`}
        alt={`Poster ${num}`}
        className='h-[400px] w-auto object-contain transition-all duration-500 hover:scale-150 hover:z-50'
      />
      {isHovering && (
        <span
          className='absolute z-50 px-3 py-1 text-sm rounded pointer-events-none whitespace-nowrap font-cartographCF bg-special'
          style={{
            left: `${tooltipPos.x + 10}px`,
            top: `${tooltipPos.y + 10}px`,
          }}
        >
          click me!
        </span>
      )}
    </div>
  );
};

const FeaturedWork = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className='min-h-screen'>
      <div className='px-5 py-10'>
        <h1 className='text-xl md:text-3xl xl:text-5xl font-monumentExtended'>
          Featured work
        </h1>
      </div>

      <div className='relative py-20 my-60'>
        <div className='flex items-center gap-10 overflow-hidden animate-scroll'>
          {/* First set */}
          {images.map((num) => (
            <ImageWithTooltip key={`first-${num}`} num={num} prefix="first" />
          ))}

          {/* Duplicate set for seamless loop */}
          {images.map((num) => (
            <ImageWithTooltip key={`second-${num}`} num={num} prefix="second" />
          ))}
        </div>
      </div>

      <div className='flex justify-end px-5 md:px-10'>
        <button className='relative flex items-center gap-2 text-xl md:text-2xl font-monumentExtended group'>
          View All <GoArrowUpRight className='text-2xl md:text-3xl' />
          <span className='absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 origin-left w-0 group-hover:w-full' />
        </button>
      </div>
    </section>
  );
};

export default FeaturedWork;