import IBlacksmith from '../interfaces/IBlacksmith';
import React, { useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function InfoBlacksmith(props: IBlacksmith) {
  const [pay, setPay] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestPayBlacksmith();
  };

  const requestPayBlacksmith = () => {
    console.log();
  };

  return (
    <>
      <h3>Melhorar {props.item.name}</h3>
      <p className='uppercase'>Nível atual: {props.item.upgrade}</p>
      <div className='flex'>
        <div className='info-blacksmith'>
          <h5>Custos</h5>
          <p>
            * {formatNumber(props.cost.grimoire)} pontos de grimório OU{' '}
            {formatNumber(props.cost.crystal)}{' '}
            <span className='icon-crystal'></span> cristais de sangue.
          </p>
          {props.cost.greenStone > 0 ? (
            <p>
              *{' '}
              <b className='green'>
                {formatNumber(props.cost.greenStone)} Green
              </b>{' '}
              Soul Stones.
            </p>
          ) : (
            ''
          )}
        </div>
        <div className='info-blacksmith'>
          <h5>Os atributos serão melhorados em {formatNumber(9)}%</h5>
          <small className='d-block'>
            Vida: {formatNumber(props.item.attributes.life)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Força: {formatNumber(props.item.attributes.force)} [
            <b className='green'>+{formatNumber(1)} pontos</b>]
          </small>
          <small className='d-block'>
            Defesa: {formatNumber(props.item.attributes.defense)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Agilidade: {formatNumber(props.item.attributes.agility)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Inteligência: {formatNumber(props.item.attributes.intelligence)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Resistência: {formatNumber(props.item.attributes.resistance)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Pagar com:</label>
        <select value={pay} onChange={e => setPay(e.target.value)}>
          <option value='' disabled>
            Selecione
          </option>
          <option value='grimoire'>Pontos de grimório</option>
          <option value='crystal'>Cristais de sangue</option>
        </select>
        <br />
        <button type='submit' disabled={!pay}>
          Melhorar
        </button>
      </form>
    </>
  );
}

export default InfoBlacksmith;
