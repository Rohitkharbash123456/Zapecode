import React from 'react';
import animatedGif from './Untitled design.gif';

const Animated = () => {
  return (
    <div className="App">
      
      <img
        src={animatedGif}
        alt="Animated GIF"
        style={{ width: '700px', height: 'auto' }} // Adjust the style as needed
      />
    </div>
  );
};

export default Animated;