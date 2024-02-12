// Certificate.js
import React, { useState } from 'react';
import './certificate.css';
import cert from '../../assests/reactcert.png';
import Modal from './Modal';

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="certificate">
      <h2 className="certificateTitle">Certificates</h2>
      <span className='certificateDesc'>Equipped with a diverse range of certifications, I am committed to staying at the forefront of technology, continuously expanding my skill set to deliver innovative and impactful solutions for my clients</span>
      <div className="certificateImg" onClick={handleImageClick}>
        <img src={cert} alt="certificate" />
      </div>
      {showModal && <Modal image={cert} onClose={handleCloseModal} />}
    </section>
  );
};

export default Certificate;
