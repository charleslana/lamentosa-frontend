import ItemSlotEnum from '../../../shared/enum/ItemSlotEnum';
import React from 'react';

type IProps = {
  isEquip: boolean;
  name: string;
  upgrade: number;
  image: number;
  level: number;
  attributes: {
    life: number;
    force: number;
    defense: number;
    agility: number;
    intelligence: number;
    resistance: number;
  };
  slot: ItemSlotEnum;
};

function InfoItem(props: IProps) {
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
            <p>Vida: +{props.attributes.life}</p>
          ) : (
            ''
          )}
          {props.attributes.force > 0 ? (
            <p>Força: +{props.attributes.force}</p>
          ) : (
            ''
          )}
          {props.attributes.defense > 0 ? (
            <p>Defesa: +{props.attributes.defense}</p>
          ) : (
            ''
          )}
          {props.attributes.agility > 0 ? (
            <p>Agilidade: +{props.attributes.agility}</p>
          ) : (
            ''
          )}
          {props.attributes.intelligence > 0 ? (
            <p>Inteligência: +{props.attributes.intelligence}</p>
          ) : (
            ''
          )}
          {props.attributes.resistance > 0 ? (
            <p>Resistência: +{props.attributes.resistance}</p>
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
