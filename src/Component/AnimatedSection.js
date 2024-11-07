import React, { useEffect, useRef } from 'react';

function AnimatedSection() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        element.classList.add('active');   

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div   
 className="animate-on-scroll" ref={elementRef}>
      {/* Your content here */}
    </div>
  );
}

export default AnimatedSection;