import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';

function ChangeCharacterNamePage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>ChangeCharacterNamePage</h1>
      </main>
      <Footer />
    </>
  );
}

export default ChangeCharacterNamePage;
