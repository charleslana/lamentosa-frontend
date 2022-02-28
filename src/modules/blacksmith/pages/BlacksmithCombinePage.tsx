import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';

function BlacksmithCombinePage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>BlacksmithCombinePage</h1>
      </main>
      <Footer />
    </>
  );
}

export default BlacksmithCombinePage;
