// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt="certificate" />
      </div>
    </div>
  );
};

export default Modal;
