import React from 'react';
import crossIcon from './CROSS.png';
import './Modal.css';

const Modal = ({ handleClose, handleBlur, show, children }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main" onBlur={handleBlur}>
        {children}
        <img src={crossIcon} onClick={handleClose} className="close-icon" alt="close" />
      </section>
    </div>
  );
};

export default Modal;