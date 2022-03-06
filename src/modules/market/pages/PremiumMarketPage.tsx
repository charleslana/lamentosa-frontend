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
