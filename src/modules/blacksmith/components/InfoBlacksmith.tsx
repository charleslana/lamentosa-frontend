import React, { useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function InfoBlacksmith() {
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
      <h3>Melhorar Simple Blade</h3>
      <p className='uppercase'>Nível atual: 1</p>
      <div className='flex'>
        <div className='info-blacksmith'>
          <h5>Custos</h5>
          <p>
            * {formatNumber(21)} pontos de grimório OU {formatNumber(7)}{' '}
            <span className='icon-crystal'></span> cristais de sangue.
          </p>
          <p>
            * <b className='green'>{formatNumber(11)} Green</b> Soul Stones.
          </p>
        </div>
        <div className='info-blacksmith'>
          <h5>Os atributos serão melhorados em {formatNumber(9)}%</h5>
          <small className='d-block'>
            Vida: {formatNumber(0)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Força: {formatNumber(5)} [
            <b className='green'>+{formatNumber(1)} pontos</b>]
          </small>
          <small className='d-block'>
            Defesa: {formatNumber(0)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Agilidade: {formatNumber(0)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Inteligência: {formatNumber(0)} [
            <b className='green'>+{formatNumber(0)} pontos</b>]
          </small>
          <small className='d-block'>
            Resistência: {formatNumber(0)} [
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
