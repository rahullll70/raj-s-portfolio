import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from '../components/TiltedCard.jsx';
import Loader from '../components/Loader.jsx';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const items = Array.from({ length: 25 }, (_, i) => i + 1);
  const [isLoaded, setIsLoaded] = useState(false);

  // 🔥 PRELOAD IMAGES
  useEffect(() => {
    let loaded = 0;
    const total = items.length;

    items.forEach((item) => {
      const img = new Image();
      img.src = `/images/poster_${item}.jpg`;

      img.onload = img.onerror = () => {
        loaded += 1;
        if (loaded === total) {
          setIsLoaded(true);
        }
      };
    });
  }, [items]);

  // 🔥 GSAP REVEAL (runs only AFTER images are loaded)
  useGSAP(
    () => {
      const revealItems = gsap.utils.toArray('.reveal-item');

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    },
    { dependencies: [isLoaded] }
  );

  return (
    <>
      {!isLoaded && <Loader onComplete={() => {}} />}

      {isLoaded && (
        <main className="w-screen min-h-screen overflow-x-hidden text-white">
          {/* Header */}
          <div className="pt-5">
            <h1 className="text-4xl text-center lg:text-6xl font-starlightRune">
              ShytAnimo
            </h1>
          </div>

          {/* Title */}
          <div className="flex items-center justify-center mx-2 my-10 overflow-hidden text-center rounded-md bg-secondary h-25 md:h-80 md:mx-10 md:rounded-xl">
            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-[150px] md:mb-12 xl:text-[200px] md:mt-2 font-rothefight uppercase leading-none">
              all work
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 pb-10 mx-4 sm:mx-6 md:mx-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {items.map((item) => (
              <div key={item} className="w-full max-w-[700px]">
                <div className="overflow-hidden reveal-item">
                  <TiltedCard
                    imageSrc={`/images/poster_${item}.jpg`}
                    altText={`Poster ${item}`}
                    captionText="CLICK ME!"
                    containerHeight="auto"
                    containerWidth="100%"
                    imageHeight="600px"
                    imageWidth="100%"
                    rotateAmplitude={6}
                    scaleOnHover={1}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Work;
