import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IItem from '../../../shared/interfaces/IItem';
import InfoBlacksmith from '../components/InfoBlacksmith';
import ItemSlotEnum from '../../../shared/enum/ItemSlotEnum';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import TabBarBlacksmith from '../components/TabBarBlacksmith';

function BlacksmithPage() {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState<IItem[]>();
  const [item, setItem] = useState<IItem>();

  const dataItems: IItem[] = [
    {
      id: 1,
      isEquip: false,
      name: 'Simple Blade',
      upgrade: 1,
      image: 1,
      level: 1,
      attributes: {
        life: 0,
        force: 5,
        defense: 0,
        agility: 1,
        intelligence: 0,
        resistance: 0,
      },
      slot: ItemSlotEnum.Hand,
    },
    {
      id: 2,
      isEquip: true,
      name: 'Chain Helmet',
      upgrade: 1,
      image: 4,
      level: 1,
      attributes: {
        life: 0,
        force: 0,
        defense: 0,
        agility: 0,
        intelligence: 6,
        resistance: 0,
      },
      slot: ItemSlotEnum.Head,
    },
  ];

  useEffect(() => {
    requestBlacksmith();
  }, []);

  const loadData = () => {
    setItems(dataItems);
  };

  const requestBlacksmith = async () => {
    loadData();
  };

  const setBlacksmith = (item: IItem) => {
    setItem(item);
    showInfoBlacksmith();
  };

  const showInfoBlacksmith = () => {
    setModal(!modal);
  };

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
              {items?.map(item => (
                <div
                  key={item.id}
                  className='inventory-slot'
                  onClick={() => setBlacksmith(item)}
                >
                  <div
                    className={`item cursor-pointer item-${item.image}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {modal ? (
        <CustomModal
          children={<InfoBlacksmith />}
          showModal={showInfoBlacksmith}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default BlacksmithPage;
