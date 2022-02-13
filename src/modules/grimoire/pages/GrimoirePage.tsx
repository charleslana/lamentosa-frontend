import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';

function GrimoirePage() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center'>Grimório</h1>
        <p className='text-center'>
          Ao chegar no nível 10 você deve escolher um Mestre, cada Mestre lhe
          ensinará Magias distintas que você poderá ver no Grimório.
        </p>
        <br />
        <p className='text-center'>
          Aqui é possível ver uma árvore com todas as Magias conhecidas pelos 4
          Mestres, mesmo que você nunca vá aprendê-las é importante estudar os
          seus atributos para saber como se defender de um ataque inimigo que
          usa tal poder!
        </p>
        <br />
        <p className='text-center'>
          Lembre-se: O Grimório apresenta apenas as Magias conhecidas pelos
          Mestres Vitalis, Aurum, Praegressus e Alacris, no entanto, existem
          outras Magias muito poderosas que você deverá descobrir como aprender,
          estas só vão aparecer aqui depois que aprendê-las!
        </p>
        <br />
        <p className='text-center'>
          As magias são usadas apenas contra adversários de raça, não se aplica
          na caça à criaturas.Você pode usar um conjunto de até 3 magias
          simultaneamente em seu Grimório, escolha com sabedoria.
        </p>
        <br />
        <p className='text-center'>
          Para aprender uma Magia vá até o seu Mestre.
        </p>
        <div className='grimoire-decks'>
          <div>
            <h3 className='text-center text-bold font-decorative'>
              Magias Aprendidas
            </h3>
            <div className='alert'>
              <p>Você não possui magias aqui</p>
            </div>
          </div>
          <div>
            <h3 className='text-center text-bold font-decorative'>
              Magias Ativas
            </h3>
            <div className='alert'>
              <p>Você não possui magias aqui</p>
            </div>
          </div>
        </div>
        <h3>Lista de Magias</h3>
        <p className='uppercase color-vitalis'>Mestre Vitalis</p>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Poder</th>
                <th>Vitórias necessárias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='spell spell-1'></div>
                </td>
                <td>Paralyze</td>
                <td>Paralisa o inimigo por algumas rodadas</td>
                <td>
                  <small className='d-block'>180 - lvl 1</small>
                  <small className='d-block'>360 - lvl 2</small>
                  <small className='d-block'>540 - lvl 3</small>
                  <small className='d-block'>720 - lvl 4</small>
                  <small className='d-block'>900 - lvl 5</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GrimoirePage;
