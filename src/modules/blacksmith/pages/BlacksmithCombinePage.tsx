import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarBlacksmith from '../components/TabBarBlacksmith';

function BlacksmithCombinePage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>O Ferreiro</h1>
        <small className='d-block text-center mb-2'>
          Traga-me Soul Stones para que eu possa combinar seus equipamentos!
        </small>
        <TabBarBlacksmith />
      </main>
      <Footer />
    </>
  );
}

export default BlacksmithCombinePage;
