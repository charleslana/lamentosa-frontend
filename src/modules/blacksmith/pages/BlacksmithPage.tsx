import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IBlacksmith from '../interfaces/IBlacksmith';
import IItem from '../../../shared/interfaces/IItem';
import InfoBlacksmith from '../components/InfoBlacksmith';
import ItemSlotEnum from '../../../shared/enum/ItemSlotEnum';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import TabBarBlacksmith from '../components/TabBarBlacksmith';
import { formatNumber } from '../../../shared/utils/Utils';

function BlacksmithPage() {
  const [modal, setModal] = useState(false);
  const [blacksmith, setBlacksmith] = useState<IBlacksmith[]>();
  const [item, setItem] = useState<IItem>();
  const [grimoire, setGrimoire] = useState(0);
  const [gold, setGold] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [greenStone, setGreenStone] = useState(0);
  const [yellowStone, setYellowStone] = useState(0);
  const [orangeStone, setOrangeStone] = useState(0);
  const [blueStone, setBlueStone] = useState(0);
  const [redStone, setRedStone] = useState(0);
  const [costGrimoire, setCostGrimoire] = useState(0);
  const [costCrystal, setCostCrystal] = useState(0);
  const [costGreenStone, setCostGreenStone] = useState(0);
  const [costYellowStone, setCostYellowStone] = useState(0);
  const [costOrangeStone, setCostOrangeStone] = useState(0);
  const [costBlueStone, setCostBlueStone] = useState(0);
  const [costRedStone, setCostRedStone] = useState(0);

  const dataBlacksmith: IBlacksmith[] = [
    {
      item: {
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
      cost: {
        greenStone: 11,
        yellowStone: 0,
        orangeStone: 0,
        blueStone: 0,
        redStone: 0,
        crystal: 7,
        grimoire: 21,
      },
    },
    {
      item: {
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
      cost: {
        greenStone: 11,
        yellowStone: 0,
        orangeStone: 0,
        blueStone: 0,
        redStone: 0,
        crystal: 7,
        grimoire: 21,
      },
    },
  ];

  useEffect(() => {
    requestBlacksmith();
  }, []);

  const loadData = () => {
    setBlacksmith(dataBlacksmith);
    setGold(0);
    setGrimoire(10);
    setCrystal(0);
    setGreenStone(0);
    setYellowStone(0);
    setOrangeStone(0);
    setBlueStone(0);
    setRedStone(1);
  };

  const requestBlacksmith = async () => {
    loadData();
  };

  const setInfoBlacksmith = (blacksmith: IBlacksmith) => {
    setCostGrimoire(blacksmith.cost.grimoire);
    setCostCrystal(blacksmith.cost.crystal);
    setCostGreenStone(blacksmith.cost.greenStone);
    setCostYellowStone(blacksmith.cost.yellowStone);
    setCostOrangeStone(blacksmith.cost.orangeStone);
    setCostBlueStone(blacksmith.cost.blueStone);
    setCostRedStone(blacksmith.cost.redStone);
    setItem(blacksmith.item);
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
                <p className='green'>
                  {formatNumber(greenStone)} Green Soul Stones
                </p>
                <p className='yellow'>
                  {formatNumber(yellowStone)} Yellow Soul Stones
                </p>
                <p className='orange'>
                  {formatNumber(orangeStone)} Orange Soul Stones
                </p>
                <p className='blue'>
                  {formatNumber(blueStone)} Blue Soul Stones
                </p>
                <p className='red'>{formatNumber(redStone)} Red Soul Stones</p>
              </div>
              <div>
                <p className='text-bold'>
                  {formatNumber(grimoire)} pontos de grimório
                </p>
                <div>
                  <p className='crystal d-inline text-bold'>
                    {formatNumber(crystal)}
                  </p>{' '}
                  <span className='icon-crystal'></span> cristais de sangue
                </div>
                <div>
                  <p className='gold text-bold text-bold'>
                    {formatNumber(gold)} <span className='icon-gold'></span>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h4>Selecione um item para melhorar</h4>
            <div className='flex'>
              {blacksmith?.map(item => (
                <div
                  key={item.item.id}
                  className='inventory-slot'
                  onClick={() => setInfoBlacksmith(item)}
                >
                  <div
                    className={`item cursor-pointer item-${item.item.image}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {modal ? (
        <CustomModal
          children={
            <InfoBlacksmith
              item={item ?? dataBlacksmith[0].item}
              cost={{
                grimoire: costGrimoire,
                crystal: costCrystal,
                greenStone: costGreenStone,
                yellowStone: costYellowStone,
                orangeStone: costOrangeStone,
                blueStone: costBlueStone,
                redStone: costRedStone,
              }}
            />
          }
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
