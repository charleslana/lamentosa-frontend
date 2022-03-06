import IItem from '../../../shared/interfaces/IItem';
import React, { useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function InfoItem(props: IItem) {
  const [askDeleteItem, setAskDeleteItem] = useState(false);
  const [successDeleteItem, setSuccessDeleteItem] = useState(false);

  const toggleDeleteItem = () => {
    setAskDeleteItem(!askDeleteItem);
  };

  const confirmDeleteItem = () => {
    setSuccessDeleteItem(true);
  };

  return (
    <>
      {!askDeleteItem ? (
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
                <p>
                  Inteligência: +{formatNumber(props.attributes.intelligence)}
                </p>
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
            <button onClick={toggleDeleteItem}>Jogar fora</button>
          </div>
        </>
      ) : successDeleteItem ? (
        <p>Item removido com sucesso.</p>
      ) : (
        <>
          <p>Isso removerá o item permanentemente. Você tem certeza?</p>
          <button onClick={confirmDeleteItem}>Sim, Remova!</button>
          <button className='float-right' onClick={toggleDeleteItem}>
            Cancelar
          </button>
        </>
      )}
    </>
  );
}

export default InfoItem;
