import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Gallery.css';

type GalleryModalProps = {
  images: string[];
  onClose: () => void;
};

const GalleryModal: React.FC<GalleryModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables swiping with mouse for testing
  });

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
        {...handlers}
      >
        <button className='close-button' onClick={onClose}>
          &times;
        </button>
        <img
          src={images[currentIndex]}
          alt='Gallery'
          className='gallery-image'
        />
        <div className='gallery-controls'>
          <button className='gallery-nav' onClick={prevImage}>
            &lt;
          </button>
          <button className='gallery-nav' onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
