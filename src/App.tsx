import About from './components/About Me/About';
import FAQAccordion from './components/Faqs/Faqs';
import './App.css';
import RegistrationForm from './components/RegisterNow';
import Modal from './components/Modal';
import { useState } from 'react';
import EventGalleryLinks from './components/Gallery';
import GallerySelector from './components/Gallery';
import GoogleFormModal from './components/GoogleForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const siteUrl = window.location.origin; // Dynamically gets the current domain

  return (
    <>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px', // Space from the top of the page
        }}
      >
        <img
          id='flyer'
          //src={`${siteUrl}/wp-content/uploads/2025/04/flyer.png`} // Dynamically sets the image URL
          src={
            'https://eastsidersgivingback.com/wp-content/uploads/2025/04/image0-e1743654865373.png'
          }
          alt='East Siders Giving Back Flyer'
          style={{
            width: '90vw',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '5px',
            objectPosition: 'top',
          }}
        />
      </header>
      <About />
      <div className='banner'>
        <h2>Secure Your Spot In The Car Show!</h2>
        <button onClick={() => setIsModalOpen(true)} className='register-btn'>
          Register
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Register Your Car</h2>
        <GoogleFormModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <FAQAccordion />
      <div className='banner'>
        <GallerySelector />
      </div>
      <div className='banner' style={{ backgroundColor: '#ffffff' }}>
        <h2>2024 Sponsors</h2>
        <img
          src={
            'https://eastsidersgivingback.com/wp-content/uploads/2025/04/IMG_20250403_184440.png'
          }
          alt='Sponsors'
          className='sponsor-image'
        />
      </div>
    </>
  );
}

export default App;
