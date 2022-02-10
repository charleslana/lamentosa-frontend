import loaderService from '../services/LoaderService';
import React, { useEffect } from 'react';

function Loading() {
  const { loading } = loaderService();

  useEffect(() => {
    checkBody();
  }, [loading]);

  const checkBody = () => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  };

  return (
    <div className={`loading-overlay ${loading ? 'd-flex' : 'd-none'}`}>
      <div className='loading'>Carregando...</div>
    </div>
  );
}

export default Loading;
