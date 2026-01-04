import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Loader = ({ children }) => {
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const runLoaderAnimation = () => {
    
    setIsLoading(true);
    gsap.set(loaderRef.current, { yPercent: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    tl.to({}, { duration: 1.2 }) // Preload buffer
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        onComplete: () => setIsLoading(false),
      });
  };

  useEffect(() => {
    runLoaderAnimation();
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <img 
            src="/images/loading.gif" 
            alt="Loading" 
            // Added styling for visibility and sizing
            className="object-contain h-auto w-100"
            onError={(e) => console.error("Image failed to load:", e.target.src)}
          />
        </div>
      )}
      
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
};

export default Loader;