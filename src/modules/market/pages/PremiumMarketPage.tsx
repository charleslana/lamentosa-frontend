import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IMarketPremium from '../interfaces/IMarketPremium';
import InfoMarketPremium from '../components/InfoMarketPremium';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function PremiumMarketPage() {
  const [modal, setModal] = useState(false);
  const [crystal, setCrystal] = useState(0);
  const [marketList, setMarketList] = useState<IMarketPremium[]>();
  const [marketPremium, setMarketPremium] = useState<IMarketPremium>();

  const dataMarketPremium: IMarketPremium[] = [
    {
      id: 1,
      name: 'Haste Potion',
      image: 1,
      description:
        'Haste Potion cancela o tempo de espera (cooldown) em batalhas contra criaturas e inimigos instantaneamente. Pode ser usada em todas as caças à criatuas e em 30 combates contra inimigos por dia.',
      quantity: 1,
      price: 4,
      discount: 20,
    },
    {
      id: 2,
      name: 'Haste Chest 1',
      image: 2,
      description:
        'Haste Potion cancela o tempo de espera (cooldown) em batalhas contra criaturas e inimigos instantaneamente. Pode ser usada em todas as caças à criatuas e em 30 combates contra inimigos por dia.',
      quantity: 24,
      price: 96,
    },
    {
      id: 3,
      name: 'Haste Chest 2',
      image: 3,
      description:
        'Haste Potion cancela o tempo de espera (cooldown) em batalhas contra criaturas e inimigos instantaneamente. Pode ser usada em todas as caças à criatuas e em 30 combates contra inimigos por dia.',
      quantity: 48,
      price: 192,
    },
    {
      id: 4,
      name: 'Haste Chest 3',
      image: 4,
      description:
        'Haste Potion cancela o tempo de espera (cooldown) em batalhas contra criaturas e inimigos instantaneamente. Pode ser usada em todas as caças à criatuas e em 30 combates contra inimigos por dia.',
      quantity: 96,
      price: 384,
    },
    {
      id: 5,
      name: 'Haste Chest 4',
      image: 5,
      description:
        'Haste Potion cancela o tempo de espera (cooldown) em batalhas contra criaturas e inimigos instantaneamente. Pode ser usada em todas as caças à criatuas e em 30 combates contra inimigos por dia.',
      quantity: 192,
      price: 768,
    },
    {
      id: 6,
      name: 'Grimoire Boost 1',
      image: 6,
      description:
        'Grimoire Boost garante pontos de grimório duplos pelos próximos ataques.',
      quantity: 30,
      price: 30,
    },
    {
      id: 7,
      name: 'Grimoire Boost 2',
      image: 7,
      description:
        'Grimoire Boost garante pontos de grimório duplos pelos próximos ataques.',
      quantity: 60,
      price: 60,
    },
    {
      id: 8,
      name: 'Grimoire Boost 3',
      image: 8,
      description:
        'Grimoire Boost garante pontos de grimório duplos pelos próximos ataques.',
      quantity: 120,
      price: 120,
    },
    {
      id: 9,
      name: 'Grimoire Boost 4',
      image: 9,
      description:
        'Grimoire Boost garante pontos de grimório duplos pelos próximos ataques.',
      quantity: 240,
      price: 240,
    },
    {
      id: 10,
      name: 'PVE XP Boost 1',
      image: 10,
      description:
        'PvE XP Boost fornece o dobro de experiência somente contra Criaturas para os próximos ataques.',
      quantity: 6,
      price: 18,
    },
    {
      id: 11,
      name: 'PVE XP Boost 2',
      image: 11,
      description:
        'PvE XP Boost fornece o dobro de experiência somente contra Criaturas para os próximos ataques.',
      quantity: 12,
      price: 36,
    },
    {
      id: 12,
      name: 'PVE XP Boost 3',
      image: 12,
      description:
        'PvE XP Boost fornece o dobro de experiência somente contra Criaturas para os próximos ataques.',
      quantity: 24,
      price: 72,
    },
    {
      id: 13,
      name: 'PVE XP Boost 4',
      image: 13,
      description:
        'PvE XP Boost fornece o dobro de experiência somente contra Criaturas para os próximos ataques.',
      quantity: 96,
      price: 288,
    },
    {
      id: 14,
      name: 'PvE XP (X3)',
      image: 14,
      description:
        'PvE XP (X3) fornece o triplo de experiência somente contra Criaturas para os próximos ataques.',
      quantity: 96,
      price: 438,
    },
    {
      id: 15,
      name: 'Boss Pack 1',
      image: 15,
      description: 'Contém green soul stones.',
      quantity: 3,
      price: 36,
      gold: 5650,
    },
    {
      id: 16,
      name: 'Boss Pack 2',
      image: 16,
      description: 'Contém green soul stones.',
      quantity: 5,
      price: 60,
      gold: 7909,
    },
    {
      id: 17,
      name: 'Boss Pack 3',
      image: 17,
      description: 'Contém green soul stones.',
      quantity: 7,
      price: 84,
      gold: 10170,
    },
    {
      id: 18,
      name: 'Boss Pack 4',
      image: 18,
      description: 'Contém green soul stones.',
      quantity: 10,
      price: 120,
      gold: 11300,
    },
    {
      id: 19,
      name: 'Boss Pack 5',
      image: 19,
      description: 'Contém green soul stones.',
      quantity: 35,
      price: 360,
      gold: 15819,
    },
  ];

  useEffect(() => {
    requestMarketPremium();
  }, []);

  const loadData = () => {
    setCrystal(0);
    setMarketList(dataMarketPremium);
  };

  const requestMarketPremium = async () => {
    loadData();
  };

  const setMarket = (marketPremium: IMarketPremium) => {
    setMarketPremium(marketPremium);
    showInfoMarketPremium();
  };

  const showInfoMarketPremium = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Mercado Premium</h1>
        <small className='uppercase d-block text-center'>
          Aqui você pode comprar itens exclusivos como Haste Potions
        </small>
        <div className='alert'>
          <p>
            Atenção: Os itens abaixo são especiais, eles NÃO usam nenhum espaço
            no seu inventário, são mostrados no Campo de Batalha.
          </p>
        </div>
        <div className='market-items'>
          {marketList?.map(marketPremium => (
            <div
              key={marketPremium.id}
              onClick={() => setMarket(marketPremium)}
            >
              <div className='market-items-bg'>
                <div
                  className={`market-item item-premium-${marketPremium.image}`}
                ></div>
              </div>
              <h3>{marketPremium.name}</h3>
              <p>Contém {formatNumber(marketPremium.quantity)}</p>
              <span className='icon-crystal'></span>{' '}
              <span className='crystal'>
                {formatNumber(marketPremium.price)}
              </span>
            </div>
          ))}
        </div>
      </main>
      {modal ? (
        <CustomModal
          children={
            <InfoMarketPremium
              marketPremium={marketPremium ?? dataMarketPremium[0]}
              crystal={crystal}
            />
          }
          showModal={showInfoMarketPremium}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default PremiumMarketPage;
