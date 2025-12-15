import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check background color at cursor position
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const brightness = getBrightness(bgColor);
        setIsDarkBackground(brightness < 128);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.onclick ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Calculate brightness from RGB color
  const getBrightness = (color) => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 255;
    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  return (
    <div 
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        transition: 'transform 0.2s ease',
        zIndex: 9999,
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        style={{
          display: 'block',
          transition: 'all 0.2s ease',
        }}
      >
        <path 
          fill={isDarkBackground ? '#ffffff' : '#000000'}
          stroke={isDarkBackground ? '#000000' : '#ffffff'}
          strokeWidth="2"
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;