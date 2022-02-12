import React from 'react';

function Train() {
  return (
    <>
      <p className='uppercase'>
        Você possui <span className='gold'>5000</span>{' '}
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
              <td>Força</td>
              <td>6</td>
              <td>
                1 <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td>Defesa</td>
              <td>6</td>
              <td>
                1 <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td>Agilidade</td>
              <td>6</td>
              <td>
                1 <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td>Inteligência</td>
              <td>6</td>
              <td>
                1 <span className='icon-gold'></span>
              </td>
              <td>
                <button>Melhorar</button>
              </td>
            </tr>
            <tr>
              <td>Resistência</td>
              <td>6</td>
              <td>
                1 <span className='icon-gold'></span>
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
