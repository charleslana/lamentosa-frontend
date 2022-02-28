import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';

function MessagesPage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>MessagesPage</h1>
      </main>
      <Footer />
    </>
  );
}

export default MessagesPage;
