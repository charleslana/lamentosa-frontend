import IActionModal from '../interfaces/IActionModal';
import IStateModal from '../interfaces/IStateModal';
import ModalEnum from '../enum/ModalEnum';

const modalReducer = (
  state: IStateModal,
  action: IActionModal
): IStateModal => {
  switch (action.type) {
    case ModalEnum.HIDE_MODAL:
      return {
        modal: false,
      };
    case ModalEnum.SHOW_MODAL:
      return {
        modal: true,
        message: action.message,
      };
    default:
      return state;
  }
};

export default modalReducer;
