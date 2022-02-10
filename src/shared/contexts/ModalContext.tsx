import IModalContext from '../interfaces/IModalContext';
import IPropsContext from '../interfaces/IPropsContext';
import IStateModal from '../interfaces/IStateModal';
import modalReducer from '../reducers/ModalReducer';
import React, { createContext, useReducer } from 'react';

export const ModalContext = createContext<IModalContext>({});

const ModalContextProvider = (props: IPropsContext): JSX.Element => {
  const initialState: IStateModal = {
    modal: false,
  };
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
