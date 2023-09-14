import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Slider Image"
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default ImageSlider;