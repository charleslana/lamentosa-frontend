import ISentinel from '../interfaces/ISentinel';
import React from 'react';

function InfoSentinel(props: ISentinel) {
  return (
    <>
      <p>
        Você possui <span className='crystal'>{props.crystal}</span>{' '}
        <span className='icon-crystal'></span>
        <span className='normal'>cristais de sangue.</span>
      </p>
      <div className='info-sentinel'>
        <div>
          <h4 className='sentinel-name'>{props.name}</h4>
          <div className={`img sentinel-${props.image}`}></div>
        </div>
        <div>
          <p>
            Diminui sua perda de ouro em <b>{props.percentage}%</b> durante 10
            horas.
          </p>
          <br />
          <p>
            Você pode contratá-lo por Cristais de Sangue ou Pontos de Grimório.
            Após contratá-lo ficará impedido de contratar novos sentinelas até o
            final das 10 horas.
          </p>
          <br />
          <p>Preço em Grimório: {props.priceGrimoire} vitórias</p>
          <p className='crystal'>
            Preço em Cristais: {props.priceCrystal} cristais
          </p>
        </div>
      </div>
      <hr />
      <div className='info-sentinel-footer'>
        <button>Contratar com Cristais</button>
        <button>Contratar com Grimório</button>
      </div>
    </>
  );
}

export default InfoSentinel;
