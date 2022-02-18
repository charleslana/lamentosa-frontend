import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import InfoSentinel from '../components/InfoSentinel';
import ISentinel from '../interfaces/ISentinel';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useState } from 'react';

function SentinelsPage() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(1);
  const [percentage, setPercentage] = useState(30);
  const [priceGrimoire, setPriceGrimoire] = useState(6);
  const [priceCrystal, setPriceCrystal] = useState(13);

  const sentinels: ISentinel[] = [
    {
      name: 'Kamena',
      image: 1,
      percentage: 30,
      priceGrimoire: 6,
      priceCrystal: 13,
    },
    {
      name: 'Zastita',
      image: 2,
      percentage: 60,
      priceGrimoire: 12,
      priceCrystal: 26,
    },
    {
      name: 'Tvrdica',
      image: 3,
      percentage: 90,
      priceGrimoire: 18,
      priceCrystal: 39,
    },
  ];

  const setSentinel = (sentinel: ISentinel) => {
    setName(sentinel.name);
    setImage(sentinel.image);
    setPercentage(sentinel.percentage);
    setPriceGrimoire(sentinel.priceGrimoire);
    setPriceCrystal(sentinel.priceCrystal);
    showSentinel();
  };

  const showSentinel = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h2 className='title text-center text-bold'>Sentinelas</h2>
        <small className='uppercase text-center d-block'>
          Você pode contratar sentinelas para diminuir sua perda de ouro em caso
          de derrotas.
        </small>
        <br />
        <small className='uppercase text-center d-block'>
          Clique em um sentinela para saber mais.
        </small>
        <div className='alert'>
          <p>Atualmente você não está com nenhum sentinela contratado.</p>
        </div>
        <div className='sentinels'>
          {sentinels.map(sentinel => (
            <div
              key={sentinel.name}
              className='text-center cursor-pointer'
              onClick={() => setSentinel(sentinel)}
            >
              <div className='mold'>
                <div className={`sentinel-${sentinel.image}`}></div>
              </div>
              <h4 className='sentinel-name'>{sentinel.name}</h4>
              <small>Proteção de</small>
              <strong className='d-block'>{sentinel.percentage}%</strong>
            </div>
          ))}
        </div>
      </main>
      {modal ? (
        <CustomModal
          children={
            <InfoSentinel
              name={name}
              image={image}
              percentage={percentage}
              priceGrimoire={priceGrimoire}
              priceCrystal={priceCrystal}
            />
          }
          showModal={showSentinel}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default SentinelsPage;
