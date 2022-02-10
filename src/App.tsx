import LoaderContextProvider from './shared/contexts/LoaderContext';
import ModalContextProvider from './shared/contexts/ModalContext';
import React from 'react';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <LoaderContextProvider>
      <ModalContextProvider>
        <Routes />
      </ModalContextProvider>
    </LoaderContextProvider>
  );
}

export default App;
