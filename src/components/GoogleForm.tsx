import React, { useState } from 'react';

const GoogleFormModal: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      {/* <button onClick={() => setIsModalOpen(true)}>
        Open Registration Form
      </button> */}

      {isModalOpen && (
        <div className='modal-overlay' onClick={() => setIsModalOpen(false)}>
          <div
            className='reg-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button in the top right */}
            <button className='close-btn' onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Register Your Car</h2>

            {/* Embed the Google Form inside the modal */}
            <iframe
              title='Car Registration Form'
              src='https://docs.google.com/forms/d/e/1FAIpQLSejSRAl_metyGIs3nN65lpQgSkDZWzInX063tJL04QJsviNfw/viewform?embedded=true'
              width='100%'
              height='600'
              style={{ border: 'none' }}
            >
              Loading…
            </iframe>

            {/* <button className='close-btn' onClick={() => setIsModalOpen(false)}>
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleFormModal;
