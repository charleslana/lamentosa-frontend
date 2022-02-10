import IActionModal from './IActionModal';
import IStateModal from './IStateModal';
import { Dispatch } from 'react';

export default interface IModalContext {
  dispatch?: Dispatch<IActionModal>;
  state?: IStateModal;
}
