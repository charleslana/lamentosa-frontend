import React, { useEffect, useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function Train() {
  const [gold, setGold] = useState(0);
  const [force, setForce] = useState(0);
  const [defense, setDefense] = useState(0);
  const [agility, setAgility] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [goldForce, setGoldForce] = useState(0);
  const [goldDefense, setGoldDefense] = useState(0);
  const [goldAgility, setGoldAgility] = useState(0);
  const [goldIntelligence, setGoldIntelligence] = useState(0);
  const [goldResistance, setGoldResistance] = useState(0);

  useEffect(() => {
    requestTrain();
  }, []);

  const requestTrain = () => {
    setGold(200);
    setForce(1);
    setDefense(1);
    setAgility(1);
    setIntelligence(1);
    setResistance(1);
    setGoldForce(1);
    setGoldDefense(1);
    setGoldAgility(1);
    setGoldIntelligence(1);
    setGoldResistance(1);
  };

  return (
    <>
      <p className='uppercase'>
        Você possui <span className='gold'>{formatNumber(gold)}</span>{' '}
        <span className='icon-gold'></span>
      </p>
      <small>
        Após o nível 10 você precisa criar ou participar de um clã para receber
        os 30 por cento de desconto
      </small>
      <br />
      <br />
      <div className='combat'></div>{' '}
      <small>Desconto atual nos atributos: 30%</small>
      <div className='table-responsive'>
        <table>
          <thead>
            <tr>
              <th>Habilidade</th>
              <th>Valor atual</th>
              <th>Preço para melhorar</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-bold'>Força</td>
              <td>{formatNumber(force)}</td>
              <td className='gold'>
                {formatNumber(goldForce)} <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td className='text-bold'>Defesa</td>
              <td>{formatNumber(defense)}</td>
              <td className='gold'>
                {formatNumber(goldDefense)} <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td className='text-bold'>Agilidade</td>
              <td>{formatNumber(agility)}</td>
              <td className='gold'>
                {formatNumber(goldAgility)} <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td className='text-bold'>Inteligência</td>
              <td>{formatNumber(intelligence)}</td>
              <td className='gold'>
                {formatNumber(goldIntelligence)}{' '}
                <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td className='text-bold'>Resistência</td>
              <td>{formatNumber(resistance)}</td>
              <td className='gold'>
                {formatNumber(goldResistance)}{' '}
                <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Train;
