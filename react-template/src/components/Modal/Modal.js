import React from 'react';
import './Modal.scss';

const Modal = ({ handleClose, show, children, onKeyUp }) => {
  return (
    <div className={show ? "modal display-block modal-enter" : "modal display-none modal-leave"} onKeyUp={onKeyUp}>
      <span onClick={handleClose} className="close" />
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;