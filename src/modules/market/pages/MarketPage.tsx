import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarMarket from '../components/TabBarMarket';

function MarketPage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Mercado</h1>
        <TabBarMarket />
      </main>
      <Footer />
    </>
  );
}

export default MarketPage;
