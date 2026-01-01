import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ children }) => {
  const loaderRef = useRef(null);
  const [showApp, setShowApp] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
    });

    // fake preload delay (replace with real preload later)
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
          setHideLoader(true);
          setShowApp(true);
        },
      });
  }, []);

  return (
    <>
      {!hideLoader && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black will-change-transform"
        >
          <h1 className="text-4xl text-white loader-text font-monumentExtended">
            LOADING
          </h1>
        </div>
      )}

      {showApp && children}
    </>
  );
};

export default Loader;
