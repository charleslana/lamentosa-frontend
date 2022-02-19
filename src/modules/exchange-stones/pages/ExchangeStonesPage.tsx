import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';

function ExchangeStonesPage() {
  const [stoneGreen, setStoneGreen] = useState(0);
  const [stoneYellow, setStoneYellow] = useState(0);
  const [stoneOrange, setStoneOrange] = useState(0);
  const [stoneBlue, setStoneBlue] = useState(0);
  const [stoneRed, setStoneRed] = useState(0);
  const [goldStoneGreen, setGoldStoneGreen] = useState(0);
  const [goldStoneYellow, setGoldStoneYellow] = useState(0);
  const [goldStoneOrange, setGoldStoneOrange] = useState(0);
  const [goldStoneBlue, setGoldStoneBlue] = useState(0);
  const [goldStoneRed, setGoldStoneRed] = useState(0);

  useEffect(() => {
    requestExchangeStone();
  }, []);

  const requestExchangeStone = () => {
    setStoneGreen(0);
    setStoneYellow(0);
    setStoneOrange(0);
    setStoneBlue(0);
    setStoneRed(0);
    setGoldStoneGreen(254);
    setGoldStoneYellow(254);
    setGoldStoneOrange(254);
    setGoldStoneBlue(254);
    setGoldStoneRed(254);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Troca de SoulStones</h1>
        <div className='alert'>
          <p>Você pode trocar Soul Stones por ouro.</p>
          <p>
            Existe um limite de 200 stones e você pode fazer apenas 1 troca a
            cada 24 horas.
          </p>
          <p>
            Verifique a tabela abaixo para ver o valor de cada tipo de stone.
          </p>
        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th>Stone</th>
                <th>Disponível</th>
                <th>Valor em ouro (cada)</th>
              </tr>
            </thead>
            <tbody>
              <tr className='stone-green'>
                <td className='text-bold'>Green</td>
                <td>{stoneGreen}</td>
                <td className='gold'>
                  {goldStoneGreen} <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='stone-yellow'>
                <td className='text-bold'>Yellow</td>
                <td>{stoneYellow}</td>
                <td className='gold'>
                  {goldStoneYellow} <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='stone-orange'>
                <td className='text-bold'>Orange</td>
                <td>{stoneOrange}</td>
                <td className='gold'>
                  {goldStoneOrange} <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='stone-blue'>
                <td className='text-bold'>Blue</td>
                <td>{stoneBlue}</td>
                <td className='gold'>
                  {goldStoneBlue} <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='stone-red'>
                <td className='text-bold'>Red</td>
                <td>{stoneRed}</td>
                <td className='gold'>
                  {goldStoneRed} <span className='icon-gold'></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ExchangeStonesPage;
