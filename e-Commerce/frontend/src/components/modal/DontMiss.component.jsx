import React, { useState, useEffect } from 'react';
import '../css/DontMiss.css';
import image1 from '../../assets/banner-newleter.jpg'

const DontMiss = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setShowModal(false);
  };

  const handleNotInterested = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="modal-inner h-full">
          <div className="modal-image-container">
            <img 
              src={image1} 
              alt="Fashion model wearing green jacket" 
              className="img-fluid w-100 h-100 object-cover"
            />
          </div>
          
          <div className="modal-content modal-text-center">
            <h2 className="modal-title mb-3">Don't miss out</h2>
            <p className="modal-description mb-4">
              Be the first one to get the new product at early bird prices.
            </p>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="modal-buttons">
                <button type="submit" className="btn btn-dark w-100 mb-3">
                  Keep me updated
                </button>
                
                <button
                  type="button"
                  className="btn btn-link text-dark w-100"
                  onClick={handleNotInterested}
                >
                  Not interested
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DontMiss;
