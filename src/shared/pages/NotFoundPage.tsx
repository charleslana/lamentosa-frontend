import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import React from 'react';
import translate from '../../translate/translate';

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className='text-center'>{translate.notFound.title}</h1>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
