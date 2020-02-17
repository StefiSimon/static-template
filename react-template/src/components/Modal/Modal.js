import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, handleBlur, show, children }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <span onClick={handleClose} className="close" />
      <section className="modal-main" onBlur={handleBlur}>
        {children}
      </section>
    </div>
  );
};

export default Modal;