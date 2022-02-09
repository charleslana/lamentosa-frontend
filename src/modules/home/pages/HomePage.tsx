import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import ITopPlayersVampires from '../interfaces/ITopPlayersVampires';
import NavBarOff from '../../../shared/components/NavBarOff';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const topPlayersVampires: ITopPlayersVampires[] = [
    {
      name: 'CharlesLanaMarquesD1',
      color: 0,
      level: 1,
      gender: 'male',
      avatar: 1,
      minLife: 100,
      maxLife: 100,
    },
    {
      name: 'CharlesLanaMarquesD2',
      color: 1,
      level: 10,
      gender: 'female',
      avatar: 2,
      minLife: 1000,
      maxLife: 1000,
    },
    {
      name: 'CharlesLanaMarquesD3',
      color: 2,
      level: 25,
      gender: 'male',
      avatar: 10,
      minLife: 100,
      maxLife: 100,
    },
    {
      name: 'CharlesLanaMarquesD4',
      color: 0,
      level: 1,
      gender: 'male',
      avatar: 7,
      minLife: 700,
      maxLife: 1500,
    },
    {
      name: 'CharlesLanaMarquesD5',
      color: 0,
      level: 1,
      gender: 'female',
      avatar: 4,
      minLife: 100,
      maxLife: 100,
    },
    {
      name: 'CharlesLanaMarquesD6',
      color: 0,
      level: 99,
      gender: 'male',
      avatar: 6,
      minLife: 20,
      maxLife: 15000,
    },
  ];

  const validateBar = (min: number, max: number): number => {
    const total = (min / max) * 115;
    if (total > 115) return 115;
    return total;
  };

  return (
    <>
      <Header />
      <NavBarOff />
      <main>
        <h1 className='text-center'>Jogo de Vampiro</h1>
        <p>
          Lamentosa é um jogo de vampiro online onde você compete contra
          centenas de jogadores em busca de poder e influência. É preciso saber
          fazer política e conquistar aliados pois aqui você não vive sozinho.
        </p>
        <br />
        <p>
          Use o chat ao seu favor já que este jogo não se resume em apenas
          evoluir seu personagem, é necessário criar laços, entrar em clãs,
          construir estratégias de ataque em massa e muito mais.
        </p>
        <br />
        <p>
          O jogo roda diretamente no seu navegador, não é preciso baixar ou
          instalar nada. Temos mais de 25000 jogadores cadastrados!
        </p>
        <Link to='/register'>
          <button className='m-auto'>Jogue Agora!</button>
        </Link>
        <h2>Jogo de Vampiro Real</h2>
        <p>
          Lamentosa vai desafiar a sua mente mais do que qualquer outro rpg de
          terror que tenha visto por aí. Você fará muitos amigos e também
          inimigos… É preciso ser implacável para sobreviver.
        </p>
        <br />
        <p>
          Os vampiros mais poderosos de clãs que não devemos sequer falar o
          nome, estão cegos pelo poder, você pode crescer aos poucos e com o
          tempo tomar o lugar destes vampiros anciãos.
        </p>
        <br />
        <p>
          A história de Lamentosa é bastante longa e difusa, para entender o
          contexto você deve ir até a biblioteca de algum clã antigo, em
          seguida, deve pedir autorização à um vampiro líder para que possa ter
          acesso aos livros ocultos, neles é possível obter o conhecimento dos
          mestres.
        </p>
        <h2>Escolha um mestre Vampiro</h2>
        <p>
          A partir do nível 10 você deve escolher um mestre para guiá-lo em sua
          jornada, cada mestre ensinará habilidades distintas, portanto, é
          preciso pensar com cautela. Dizem que os mestres podem eliminar todos
          os vampiros do mundo em um piscar de olhos, tamanho é o poder dessas
          criaturas!
        </p>
        <br />
        <p>
          Outro ponto muito importante neste jogo de vampiro são as batalhas
          coletivas em tempo real. Uma vez por dia os mestres vão tocar os
          tambores de guerra, neste momento, todos os vampiros que estiverem
          online devem ir ao desfiladeiro Tormentus para uma sangrenta batalha
          em grupo, ao final da batalha um excelente prêmio será dado.
        </p>
        <br />
        <p>
          Existem vários outros eventos coletivos em Lamentosa, como por
          exemplo, a guerra dos clãs que incluem sabotagens e magias. Você pode
          também diariamente atacar um Boss em grupo e obter itens exclusivos,
          afinal, vampiros precisam estar bem equipados em tempos de guerra!
        </p>
        <h2>Revele-se como um Vampiro estrategista!</h2>
        <p>
          Não seja tímido! Como já foi dito, é preciso fazer alianças, então
          participe dos grupos que for convidado no WhatsApp, telegram ou
          discord. Além disso empenhe-se em socializar no chat do jogo de
          vampiro.
        </p>
        <br />
        <p>
          Quando falei sobre saber fazer política eu não estava brincando! A
          medida que você for se destacando no jogo será natural que outros
          vampiros se aproximem de você para viverem à sua sombra, seja por
          proteção, para ganhar algum item ou algum conhecimento sobre magias
          ocultas, enfim, é necessário ter um olho clínico para abordagens
          assim, e se você for um bom estrategista conseguirá apoio para um
          excelente objetivo: Tornar-se o grande líder dos vampiros. No dia 3 de
          cada mês acontece uma eleição onde os vampiros elegem o grande líder
          para os próximos 30 dias. O líder tem um papel de destaque nas
          decisões da raça, ele recebe itens Tenebris (muito fortes e
          indestrutíveis) e pode expulsar outros vampiros de um campo de
          batalha, por tudo isso, é um cargo bastante visado.
        </p>
        <br />
        <p>
          Bom, em resumo é isso que você precisa saber agora, pois se fosse
          falar tudo o que se pode fazer aqui, todas as possibilidades
          estratégicas, builds, etc ficaria um texto enorme e muito chato. Outro
          ponto é que queremos que você se socialize com os outros jogadores
          vampiros para tirar suas dúvidas :)
        </p>
        <br />
        <p>E então, vamos começar a jogar Lamentosa agora?</p>
        <Link to='/register'>
          <button className='m-auto'>Jogue Agora!</button>
        </Link>
        <h2>Alguns Vampiros que jogam lamentosa</h2>
        <div className='tops-vampire'>
          {topPlayersVampires.map(vampire => (
            <div key={vampire.name} className='frame-character'>
              <div
                className={`frame-avatar avatar-vampire-${vampire.gender}-${vampire.avatar}`}
              >
                <div className='circle-vampire'>
                  <div className='frame-level'>{vampire.level}</div>
                </div>
              </div>
              <div className={`frame-name name-color-${vampire.color}`}>
                {vampire.name}
              </div>
              <div
                className='frame-bar-life'
                style={{ width: validateBar(vampire.minLife, vampire.maxLife) }}
              >
                {vampire.minLife}/{vampire.maxLife}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
