import ModalEnum from '../enum/ModalEnum';
import { ModalContext } from '../contexts/ModalContext';
import { useContext } from 'react';

const modalService = (): {
  modal: boolean | undefined;
  showModal: (message: string) => void | undefined;
  hideModal: () => void | undefined;
  message: string | undefined;
} => {
  const { state, dispatch } = useContext(ModalContext);
  const hideModal = () =>
    dispatch?.({
      type: ModalEnum.HIDE_MODAL,
    });
  const showModal = (message: string) =>
    dispatch?.({
      message: message,
      type: ModalEnum.SHOW_MODAL,
    });
  return {
    modal: state?.modal,
    showModal: showModal,
    hideModal: hideModal,
    message: state?.message,
  };
};

export default modalService;
