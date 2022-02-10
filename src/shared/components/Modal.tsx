import modalService from '../services/ModalService';
import React, { useEffect } from 'react';

function Modal() {
  const { modal, hideModal, message } = modalService();

  useEffect(() => {
    checkBody();
  }, [modal]);

  const checkBody = () => {
    if (modal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  };

  return (
    <div className={`modal-wrapper ${modal ? 'd-block' : 'd-none'}`}>
      <div className='modal'>
        <button className='close-modal' onClick={hideModal}>
          X
        </button>
        <p>{message}</p>
        <button className='ok-modal' onClick={hideModal}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default Modal;
