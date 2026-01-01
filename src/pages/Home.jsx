import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import ScrollVelocity from '../components/ScrollVelocity';

const Home = () => {
  return (
    <main className='relative w-full text-white cursor-none'>
      <Hero />
      <ScrollVelocity
        texts={['RAJ - 2025 - PORTFOLIO - SHYTANIMO -']}
        velocity={100}
        className='py-5 bg-white custom-scroll-text font-monumentExtended text-accent'
      />
      <FeaturedWork />
      <ScrollVelocity
        texts={['RAJ - 2025 - PORTFOLIO - SHYTANIMO -']}
        velocity={100}
        className='py-5 bg-white custom-scroll-text font-monumentExtended text-accent'
      />
    </main>
  );
};

export default Home;
