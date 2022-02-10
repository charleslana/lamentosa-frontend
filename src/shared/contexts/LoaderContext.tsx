import ILoaderContext from '../interfaces/ILoaderContext';
import IPropsContext from '../interfaces/IPropsContext';
import IStateLoader from '../interfaces/IStateLoader';
import loaderReducer from '../reducers/LoaderReducer';
import React, { createContext, useReducer } from 'react';

export const LoaderContext = createContext<ILoaderContext>({});

const LoaderContextProvider = (props: IPropsContext): JSX.Element => {
  const initialState: IStateLoader = {
    loading: false,
  };
  const [state, dispatch] = useReducer(loaderReducer, initialState);
  return (
    <LoaderContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
