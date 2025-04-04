import React, { useState } from 'react';
import GalleryModal from './GalleryModal';
import './Gallery.css';

type Galleries = {
  [key: string]: string[];
};

const galleries: Galleries = {
  '2024 Toy Give Away': [
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080446-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080448-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080445-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080449-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080451-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080443-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080440-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080423-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080416-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080458-scaled.jpg',
  ],
  '2024 1st Annual Toy Drive Car Show': [
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080510-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080509-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080507-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080506-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080504-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080503-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080500-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080516-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080515-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080514-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080513-scaled.jpg',
  ],
  '2023 Toy Give Away': [
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080535.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080533.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080532.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080529.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080528.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080527.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080522.jpg',
  ],
  '2022 Toy Give Away': [
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080543-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080537-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080542-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080541-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080547-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080548-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080550-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080546-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080545-scaled.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080551.jpg',
    'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250401_080539-scaled.jpg',
  ],
};

const GallerySelector: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

  return (
    <div className='gallery-selector'>
      <h2>Past Event Photos</h2>
      <ul className='gallery-list'>
        {Object.keys(galleries).map((event) => (
          <li key={event}>
            <button
              className='gallery-button'
              onClick={() => setSelectedGallery(event)}
            >
              {event}
            </button>
          </li>
        ))}
      </ul>
      {selectedGallery && (
        <GalleryModal
          images={galleries[selectedGallery]}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </div>
  );
};

export default GallerySelector;
