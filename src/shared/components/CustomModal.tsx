import React, { ReactNode, useEffect, useState } from 'react';

type IProps = {
  children: ReactNode;
  showModal: VoidFunction;
};

function CustomModal(props: IProps) {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    checkBody();
  }, [modal]);

  const closeModal = () => {
    setModal(false);
    document.body.removeAttribute('style');
    props.showModal();
  };

  const checkBody = () => {
    if (modal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  };

  return (
    <div className={`modal-wrapper ${modal ? 'd-block' : 'd-none'}`}>
      <div className='modal custom-modal'>
        <button className='close-modal' onClick={closeModal}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default CustomModal;
