import IMarketPremium from '../interfaces/IMarketPremium';
import React from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

interface IMarket {
  marketPremium: IMarketPremium;
  crystal: number;
}

function InfoMarketPremium(props: IMarket) {
  return (
    <>
      <h3>Comprar {props.marketPremium.name}</h3>
      <p>
        Você possui{' '}
        <span className='crystal'>{formatNumber(props.crystal)}</span>{' '}
        <span className='icon-crystal'></span> cristais de sangue
      </p>
      <small>{props.marketPremium.description}</small>
      <br />
      <br />
      <small>
        Atenção, você só pode usar esse item enquanto estiver como Premium ou
        VIP.
      </small>
      <div className='flex'>
        <div
          className={`market-item item-premium-${props.marketPremium.image}`}
        ></div>
        <div>
          <p className='text-bold'>
            Quantidade: {formatNumber(props.marketPremium.quantity)}
            {props.marketPremium.gold ? (
              <>
                &nbsp;+ <span className='icon-gold'></span>
                <span className='gold'>
                  {' '}
                  {formatNumber(props.marketPremium.gold)}
                </span>
              </>
            ) : (
              ''
            )}
          </p>
          <p className='text-bold'>
            Preço:{' '}
            <span className='crystal'>
              {formatNumber(props.marketPremium.price)}
            </span>{' '}
            <span className='icon-crystal'></span> cristais de sangue
          </p>
          <p className='text-bold'>
            {props.marketPremium.discount ? (
              <>
                Preço VIP:{' '}
                <span className='crystal'>
                  {formatNumber(
                    props.marketPremium.price -
                      (props.marketPremium.price *
                        props.marketPremium.discount) /
                        100
                  )}
                </span>{' '}
                <span className='icon-crystal'></span> cristais de sangue
              </>
            ) : (
              ''
            )}
          </p>
        </div>
      </div>
      <button className='float-right'>Comprar</button>
    </>
  );
}

export default InfoMarketPremium;
