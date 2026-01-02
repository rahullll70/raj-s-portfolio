import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Loader = ({ children }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const [showApp, setShowApp] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const isFirstLoad = useRef(true);

  // Function to run loader animation
  const runLoaderAnimation = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
    });

    // Reset states
    gsap.set('.loader-text', { y: 0, opacity: 1 });
    gsap.set(loaderRef.current, { yPercent: 0 });

    // fake preload delay
    tl.to({}, { duration: 1 })

      // text exit
      .to('.loader-text', {
        y: -50,
        opacity: 0,
        duration: 0.6,
      })

      // loader exit
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        onComplete: () => {
          if (isFirstLoad.current) {
            setHideLoader(true);
            setShowApp(true);
            isFirstLoad.current = false;
          } else {
            setIsTransitioning(false);
          }
        },
      });
  };

  // Initial load
  useEffect(() => {
    runLoaderAnimation();
  }, []);

  // Route change detection
  useEffect(() => {
    if (!isFirstLoad.current) {
      setIsTransitioning(true);
      setHideLoader(false);
      window.scrollTo(0, 0);
      
      // Small delay before animation
      setTimeout(() => {
        runLoaderAnimation();
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      {(!hideLoader || isTransitioning) && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black will-change-transform"
        >
          <h1 
            ref={textRef}
            className="text-4xl text-white loader-text font-monumentExtended"
          >
            LOADING
          </h1>
        </div>
      )}

      {showApp && children}
    </>
  );
};

export default Loader;