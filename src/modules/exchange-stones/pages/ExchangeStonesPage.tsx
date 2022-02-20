import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

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
  const [stone, setStone] = useState('green');
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    requestExchangeStone();
  }, []);

  const calculateStone = (stone: string, quantity: number) => {
    switch (stone) {
      case 'green':
        setTotal(goldStoneGreen * quantity);
        break;
      case 'yellow':
        setTotal(goldStoneYellow * quantity);
        break;
      case 'orange':
        setTotal(goldStoneOrange * quantity);
        break;
      case 'blue':
        setTotal(goldStoneBlue * quantity);
        break;
      default:
        setTotal(goldStoneRed * quantity);
        break;
    }
  };

  const handleQuantity = (quantity: number, st = stone) => {
    if (quantity > 200) {
      setQuantity(200);
      calculateStone(st, 200);
      return;
    }
    setQuantity(quantity);
    calculateStone(st, quantity);
  };

  const handleStone = (stone: string) => {
    setStone(stone);
    handleQuantity(quantity, stone);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(stone + '\n' + quantity);
  };

  const requestExchangeStone = () => {
    setStoneGreen(0);
    setStoneYellow(0);
    setStoneOrange(0);
    setStoneBlue(0);
    setStoneRed(0);
    setGoldStoneGreen(254);
    setGoldStoneYellow(355);
    setGoldStoneOrange(722);
    setGoldStoneBlue(1064);
    setGoldStoneRed(2439);
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
              <tr className='green'>
                <td className='text-bold'>Green</td>
                <td>{stoneGreen}</td>
                <td className='gold'>
                  {formatNumber(goldStoneGreen)}{' '}
                  <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='yellow'>
                <td className='text-bold'>Yellow</td>
                <td>{stoneYellow}</td>
                <td className='gold'>
                  {formatNumber(goldStoneYellow)}{' '}
                  <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='orange'>
                <td className='text-bold'>Orange</td>
                <td>{stoneOrange}</td>
                <td className='gold'>
                  {formatNumber(goldStoneOrange)}{' '}
                  <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='blue'>
                <td className='text-bold'>Blue</td>
                <td>{stoneBlue}</td>
                <td className='gold'>
                  {formatNumber(goldStoneBlue)}{' '}
                  <span className='icon-gold'></span>
                </td>
              </tr>
              <tr className='red'>
                <td className='text-bold'>Red</td>
                <td>{stoneRed}</td>
                <td className='gold'>
                  {formatNumber(goldStoneRed)}{' '}
                  <span className='icon-gold'></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Cor da Stone:</label>
          <select value={stone} onChange={e => handleStone(e.target.value)}>
            <option value='green'>Green Souls</option>
            <option value='yellow'>Yellow Souls</option>
            <option value='orange'>Orange Souls</option>
            <option value='blue'>Blue Souls</option>
            <option value='red'>Red Souls</option>
          </select>
          <label>Quantidade:</label>
          <input
            type='number'
            min='0'
            value={quantity}
            onChange={e => handleQuantity(+e.target.value)}
          ></input>
          <br />
          <br />
          <div className='text-center'>
            Total: {formatNumber(total)}&nbsp;
            <div className='icon-gold'></div>
          </div>
          <button
            className='m-auto'
            type='submit'
            disabled={!stone || !quantity}
          >
            Trocar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default ExchangeStonesPage;
