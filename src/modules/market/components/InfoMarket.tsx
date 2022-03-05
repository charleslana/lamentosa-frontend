import IMarket from '../interfaces/IMarket';
import React from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function InfoMarket(props: IMarket) {
  return (
    <>
      <h4>
        Você possui <span className='icon-gold'></span>{' '}
        <span className='gold text-bold'>{formatNumber(props.gold)}</span>{' '}
        <span className='icon-crystal'></span>{' '}
        <span className='crystal text-bold'>{formatNumber(props.crystal)}</span>
      </h4>
      <div className='table-responsive'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Nível requerido</th>
              <th>Nível de melhoria</th>
              <th>Slot</th>
              <th>Vendedor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.item.name}</td>
              <td>
                <span className='icon-gold'></span>{' '}
                <span className='gold text-bold'>
                  {formatNumber(props.price.gold)}
                </span>
                <br />
                <br />
                <span className='icon-crystal'></span>{' '}
                <span className='crystal text-bold'>
                  {formatNumber(props.price.crystal)}
                </span>
              </td>
              <td>{props.item.level}</td>
              <td>{props.item.upgrade}</td>
              <td>{props.item.slot}</td>
              <td>{props.seller}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='table-responsive'>
        <table>
          <thead>
            <tr>
              <th>Vida</th>
              <th>Força</th>
              <th>Defesa</th>
              <th>Agilidade</th>
              <th>Inteligência</th>
              <th>Resistência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+{formatNumber(props.item.attributes.life)}</td>
              <td>+{formatNumber(props.item.attributes.force)}</td>
              <td>+{formatNumber(props.item.attributes.defense)}</td>
              <td>+{formatNumber(props.item.attributes.agility)}</td>
              <td>+{formatNumber(props.item.attributes.intelligence)}</td>
              <td>+{formatNumber(props.item.attributes.resistance)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className='text-center'>
        <button>Comprar</button>
      </div>
    </>
  );
}

export default InfoMarket;
