import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IItem from '../../../shared/interfaces/IItem';
import IMarket from '../interfaces/IMarket';
import InfoMarket from '../components/InfoMarket';
import ItemRarityEnum from '../../../shared/enum/ItemRarityEnum';
import ItemSlotEnum from '../../../shared/enum/ItemSlotEnum';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import TabBarMarket from '../components/TabBarMarket';
import TypeMarketEnum from '../enum/TypeMarketEnum';
import { formatNumber } from '../../../shared/utils/Utils';

function MarketPage() {
  const [filter, setFilter] = useState<TypeMarketEnum>(TypeMarketEnum.Featured);
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState<IItem>();
  const [seller, setSeller] = useState('');
  const [gold, setGold] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [priceGold, setPriceGold] = useState(0);
  const [priceCrystal, setPriceCrystal] = useState(0);

  const dataMarket: IMarket[] = [
    {
      item: {
        id: 1,
        name: 'Simple Blade',
        image: 1,
        isEquip: false,
        level: 1,
        upgrade: 1,
        rarity: ItemRarityEnum.Common,
        slot: ItemSlotEnum.Hand,
        attributes: {
          agility: 0,
          defense: 0,
          force: 5,
          intelligence: 0,
          life: 0,
          resistance: 0,
        },
      },
      gold: 6000,
      crystal: 0,
      price: {
        gold: 2975,
        crystal: 0,
      },
      seller: 'Charles',
      type: TypeMarketEnum.Featured,
    },
    {
      item: {
        id: 2,
        name: 'Ancient Amulet',
        image: 2,
        isEquip: false,
        level: 1,
        upgrade: 1,
        rarity: ItemRarityEnum.Common,
        slot: ItemSlotEnum.Neck,
        attributes: {
          agility: 0,
          defense: 0,
          force: 0,
          intelligence: 5,
          life: 0,
          resistance: 0,
        },
      },
      gold: 6000,
      crystal: 0,
      price: {
        gold: 1200,
        crystal: 0,
      },
      seller: 'Tester',
      type: TypeMarketEnum.Neck,
    },
  ];

  useEffect(() => {
    requestMarket();
  }, []);

  const changeTab = (type: TypeMarketEnum) => {
    setFilter(type);
  };

  const loadData = () => {
    setGold(6000);
    setCrystal(0);
  };

  const requestMarket = async () => {
    loadData();
  };

  const setMarket = (market: IMarket) => {
    setItem(market.item);
    setSeller(market.seller);
    setPriceGold(market.price.gold);
    setPriceCrystal(market.price.crystal);
    showInfoMarket();
  };

  const showInfoMarket = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Mercado</h1>
        <TabBarMarket tabFunction={type => changeTab(type)} />
        <div className='text-center'>
          <small>
            As vezes "O Fantasma" um velho mercador, coloca novos produtos aqui.
            Você pode também esperar até um vampiro ou lobisomem colocar algo à
            venda
          </small>
        </div>
        <div className='market-items'>
          {dataMarket
            .filter(
              market =>
                market.type === filter || market.item.rarity?.includes(filter)
            )
            .map(market => (
              <div key={market.item.id} onClick={() => setMarket(market)}>
                <div className='market-items-bg'>
                  <div
                    className={`market-item item-${market.item.image}`}
                  ></div>
                </div>
                <h3>{market.item.name}</h3>
                <p>
                  {market.item.slot} ({market.item.rarity})
                </p>
                <span className='icon-gold'></span>{' '}
                <span className='gold'>{formatNumber(market.price.gold)}</span>
                <br />
                <span className='icon-crystal'></span>{' '}
                <span className='crystal'>
                  {formatNumber(market.price.crystal)}
                </span>
                <p>Nível {market.item.level}</p>
              </div>
            ))}
        </div>
      </main>
      {modal ? (
        <CustomModal
          children={
            <InfoMarket
              item={item ?? dataMarket[0].item}
              seller={seller}
              gold={gold}
              crystal={crystal}
              price={{
                gold: priceGold,
                crystal: priceCrystal,
              }}
              type={TypeMarketEnum.Featured}
            />
          }
          showModal={showInfoMarket}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default MarketPage;
