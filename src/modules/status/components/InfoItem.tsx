import IItem from '../../../shared/interfaces/IItem';
import React from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function InfoItem(props: IItem) {
  return (
    <>
      <div className='info-item'>
        <div>
          <h3>{props.name}</h3>
          <h5>
            Nível de Melhoria: <b>{props.upgrade}</b>
          </h5>
          <div className={`item item-${props.image}`}></div>
        </div>
        <div>
          {props.attributes.life > 0 ? (
            <p>Vida: +{formatNumber(props.attributes.life)}</p>
          ) : (
            ''
          )}
          {props.attributes.force > 0 ? (
            <p>Força: +{formatNumber(props.attributes.force)}</p>
          ) : (
            ''
          )}
          {props.attributes.defense > 0 ? (
            <p>Defesa: +{formatNumber(props.attributes.defense)}</p>
          ) : (
            ''
          )}
          {props.attributes.agility > 0 ? (
            <p>Agilidade: +{formatNumber(props.attributes.agility)}</p>
          ) : (
            ''
          )}
          {props.attributes.intelligence > 0 ? (
            <p>Inteligência: +{formatNumber(props.attributes.intelligence)}</p>
          ) : (
            ''
          )}
          {props.attributes.resistance > 0 ? (
            <p>Resistência: +{formatNumber(props.attributes.resistance)}</p>
          ) : (
            ''
          )}
          <p>Nível: {props.level}</p>
          <p>Slot: {props.slot}</p>
        </div>
      </div>
      <hr />
      <div className='info-item-footer'>
        {props.isEquip ? (
          <>
            <button>Equipar</button>
            <button>Vender</button>
            <button>Vender no Mercado</button>
          </>
        ) : (
          <button>Desequipar</button>
        )}
        <button>Jogar fora</button>
      </div>
    </>
  );
}

export default InfoItem;
