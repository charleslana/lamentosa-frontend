import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarBlacksmith from '../components/TabBarBlacksmith';

function BlacksmithPage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>O Ferreiro</h1>
        <small className='d-block text-center mb-2'>
          Traga-me Soul Stones para que eu possa melhorar seus equipamentos!
        </small>
        <TabBarBlacksmith />
        <div className='flex'>
          <div className='blacksmith-image'></div>
          <div className='blacksmith-box'>
            <h4>Você possui</h4>
            <div className='blacksmith-info'>
              <div>
                <p className='green'>0 Green Soul Stones</p>
                <p className='yellow'>0 Yellow Soul Stones</p>
                <p className='orange'>0 Orange Soul Stones</p>
                <p className='blue'>0 Blue Soul Stones</p>
                <p className='red'>0 Red Soul Stones</p>
              </div>
              <div>
                <p className='text-bold'>0 pontos de grimório</p>
                <div>
                  <p className='crystal d-inline text-bold'>0</p>{' '}
                  <span className='icon-crystal'></span> cristais de sangue
                </div>
                <div>
                  <p className='gold text-bold text-bold'>
                    0 <span className='icon-gold'></span>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h4>Selecione um item para melhorar</h4>
            <div className='flex'>
              <div className='inventory-slot'>
                <div className='item cursor-pointer item-1'></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlacksmithPage;
