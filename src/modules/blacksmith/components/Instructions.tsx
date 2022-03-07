import React from 'react';

function Instructions() {
  return (
    <>
      <h3>Melhorar itens</h3>
      <p>
        Você pode melhorar os itens 'equipáveis' utilizando as Soul Stones
        correspondentes à categoria do item.
      </p>
      <ul>
        <li>* Itens de nível menor que 10: Green Soul Stones</li>
        <li>
          * Itens de nível maior ou igual a 10 e menor que 20 : Yellow Soul
          Stones
        </li>
        <li>
          * Itens de nível maior ou igual a 20 e menor que 35: Orange Soul
          Stones
        </li>
        <li>
          * Itens de nível maior ou igual a 35 e menor que 50: Blue Soul Stones
        </li>
        <li>* Itens de nível maior ou igual a 50: Red Soul Stones</li>
        <li>
          <br />
        </li>
        <li>
          - Cada item por padrão está no nível 1 de melhoria, podendo atingir
          até o nível 7 (limite).
        </li>
        <li>
          - Itens de aprendizes, soldados, guerreiros e voivodas são melhorados
          em 20% conforme os atributos atuais a cada upgrade.
        </li>
        <li>
          - Itens de anciãos são melhorados em 15% conforme os atributos atuais
          a cada upgrade.
        </li>
        <li>
          - Além das Soul Stones você precisa pagar ao ferreiro pontos de
          grimório ou cristais de sangue.
        </li>
        <li>
          - Itens comuns, raros, elite, tenebris, lendários e únicos podem ser
          melhorados sem qualquer restrição.
        </li>
      </ul>
      <br />
      <h3>Sabotagens</h3>
      <p>
        Se um item estiver MELHORADO a sabotagem não irá destruí-lo e sim
        diminuir um nível de upgrade, caso não tenha nenhuma melhoria (nível de
        upgrade igual a 1) o item será destruído, claro, se não houver proteção
        contra sabotagens.
      </p>
      <br />
      <h3>Combinar</h3>
      <ul>
        <li>
          - Você pode combinar 2 itens comuns para transformá-lo em um item raro
          ou combinar 3 itens raros para transformá-lo em um item de elite.
        </li>
        <li>- Itens combinados não recebem bônus do talento Hard Worker.</li>
        <li>
          - Para combinar um item é necessário que os outros sejam do mesmo
          nível, tipo e slot, a resultante será do nível correspondente.
        </li>
        <li>
          - É necessário pagar ao ferreiro uma quantia de ouro ou cristais de
          sangue, não é necessário soul stones para o serviço.
        </li>
      </ul>
    </>
  );
}

export default Instructions;
