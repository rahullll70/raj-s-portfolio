import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ImageItem = ({ num, setActiveImage }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className='relative flex-shrink-0 cursor-pointer'
      onMouseEnter={() => {
        setActiveImage(num);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setActiveImage(null);
        setShowTooltip(false);
      }}
      onMouseMove={handleMove}
    >
      <img
        src={`/images/poster_${num}.jpg`}
        alt={`Poster ${num}`}
        className='md:h-[300px] h-[200px] w-auto object-contain'
      />

      {/* Tooltip */}
      {showTooltip && (
        <span
          className='absolute z-50 px-3 py-1 text-sm rounded pointer-events-none whitespace-nowrap font-cartographCF bg-special'
          style={{
            left: pos.x + 12,
            top: pos.y + 12,
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
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className='relative min-h-screen'>
      {/* Heading */}
      <div className='px-5 py-10'>
        <h1 className='text-2xl md:text-3xl xl:text-5xl font-monumentExtended'>
          Featured work
        </h1>
      </div>

      {/* Horizontal scroll */}
      <div className='relative py-20 overflow-hidden my-60'>
        <div className='flex items-center gap-10 animate-scroll'>
          {[...images, ...images].map((num, index) => (
            <ImageItem key={index} num={num} setActiveImage={setActiveImage} />
          ))}
        </div>
      </div>

      {/* Center hover preview */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className='fixed inset-0 z-[999] flex items-center justify-center pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={`/images/poster_${activeImage}.jpg`}
              alt='Preview'
              className='max-h-[80vh] w-auto object-contain'
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* View all */}
      <div className='flex justify-end px-5 mb-5 md:px-10'>
        <button
          onClick={() => navigate('/work')}
          className='relative flex items-center gap-2 text-md md:text-2xl font-monumentExtended group'
        >
          View All <GoArrowUpRight className='text-2xl md:text-3xl' />
          <span className='absolute left-0 -bottom-1 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300' />
        </button>
      </div>
    </section>
  );
};

export default FeaturedWork;
