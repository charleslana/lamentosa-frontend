import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import ISpell from '../interfaces/ISpell';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import TypeMasterEnum from '../enum/TypeMasterEnum';

function GrimoirePage() {
  const [spells, setSpells] = useState<ISpell[]>();

  const dataSpells: ISpell[] = [
    {
      name: 'Paralyze',
      image: 1,
      description: 'Paralisa o inimigo por algumas rodadas',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Life Drain',
      image: 2,
      description: 'Drena parte da vida do inimigo na primeira rodada',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Mercenary Rush',
      image: 3,
      description: 'Aumenta a quantidade de ouro roubado do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Db Protection',
      image: 4,
      description: 'Diminui o poder absoluto da magia DEFENSE BREAK',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Master Possession',
      image: 5,
      description: 'Aumenta todos os atributos antes do combate',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Auto Recovery',
      image: 6,
      description:
        'Recupera parte da vida no final do combate desde que a vida esteja acima de 250 pontos',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Human Sacrifice',
      image: 7,
      description: 'Diminui o custo da recuperação de vida no Templo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Vitalis,
    },
    {
      name: 'Defense Break',
      image: 8,
      description: 'Reduz parte da defesa do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Vigilance',
      image: 9,
      description: 'Aumenta a quantidade de horas de imunidade',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Mirror Attack',
      image: 10,
      description: 'Copia parte da força do inimigo e acrescenta na sua força',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Dizziness Protection',
      image: 11,
      description: 'Diminui o poder absoluto da magia DIZZINESS',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Pb Protection	',
      image: 12,
      description:
        'Diminui o poder absoluto da magia POISON BITE, no nível 5 POISON BITE é completamente anulado',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Mp Protection',
      image: 13,
      description: 'Diminui o poder absoluto da magia MASTER POSSESSION',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Curse Protection',
      image: 14,
      description: 'Diminui a quantidade de rodadas roubadas com a magia CURSE',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Aurum,
    },
    {
      name: 'Rage',
      image: 15,
      description: 'Aumenta o dano em cada acerto',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Insanity',
      image: 16,
      description: 'Reduz parte da inteligência do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Berserker Attack',
      image: 17,
      description:
        'Causa um grande dano baseado no seu dano base na primeira rodada',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Destruction',
      image: 18,
      description: 'Aumenta a força',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Extreme Revenge',
      image: 19,
      description:
        'Usa o dano do POISON BITE inimigo contra ele próprio em certas rodadas',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Ld Protection',
      image: 20,
      description: 'Diminui o poder absoluto da magia LIFE DRAIN',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Curse',
      image: 21,
      description: 'Diminui a quantidade de rodadas do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Praegressus,
    },
    {
      name: 'Poison Bite',
      image: 22,
      description: 'Envenena o inimigo por 5 rodadas, em cada uma ele perde',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Dizziness',
      image: 23,
      description: 'Reduz parte da força do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Persistence',
      image: 24,
      description: 'Rodadas adicionais com 100% de acerto',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Ma Protection',
      image: 25,
      description: 'Diminui o poder absoluto da magia MIRROR ATTACK',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Paralyze Protection',
      image: 26,
      description: 'Diminui as rodadas da magia PARALYZE',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Inflict Wound',
      image: 27,
      description: 'Diminui a chance de bloqueio do inimigo',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
    {
      name: 'Counter Attack',
      image: 28,
      description:
        'Ataca o inimigo a cada ataque (normal) recebido, mas o dano do golpe é reduzido',
      victories: [180, 360, 540, 720, 900],
      typeMaster: TypeMasterEnum.Alacris,
    },
  ];

  useEffect(() => {
    requestGrimoire();
  }, []);

  const requestGrimoire = async () => {
    setSpells(dataSpells);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Grimório</h1>
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
                <th className='text-bold'>Nome</th>
                <th className='text-bold'>Poder</th>
                <th className='text-bold'>Vitórias necessárias</th>
              </tr>
            </thead>
            <tbody>
              {spells?.map(spell => {
                if (spell.typeMaster === TypeMasterEnum.Vitalis) {
                  return (
                    <tr key={spell.name}>
                      <td>
                        <div className={`spell spell-${spell.image}`}></div>
                      </td>
                      <td>{spell.name}</td>
                      <td>{spell.description}</td>
                      <td>
                        {spell.victories.map((victory, index) => (
                          <small key={index} className='d-block'>
                            {victory} - lvl {index + 1}
                          </small>
                        ))}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <p className='uppercase color-aurum'>Mestre Aurum</p>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className='text-bold'>Nome</th>
                <th className='text-bold'>Poder</th>
                <th className='text-bold'>Vitórias necessárias</th>
              </tr>
            </thead>
            <tbody>
              {spells?.map(spell => {
                if (spell.typeMaster === TypeMasterEnum.Aurum) {
                  return (
                    <tr key={spell.name}>
                      <td>
                        <div className={`spell spell-${spell.image}`}></div>
                      </td>
                      <td>{spell.name}</td>
                      <td>{spell.description}</td>
                      <td>
                        {spell.victories.map((victory, index) => (
                          <small key={index} className='d-block'>
                            {victory} - lvl {index + 1}
                          </small>
                        ))}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <p className='uppercase color-praegressus'>Mestre Praegressus</p>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className='text-bold'>Nome</th>
                <th className='text-bold'>Poder</th>
                <th className='text-bold'>Vitórias necessárias</th>
              </tr>
            </thead>
            <tbody>
              {spells?.map(spell => {
                if (spell.typeMaster === TypeMasterEnum.Praegressus) {
                  return (
                    <tr key={spell.name}>
                      <td>
                        <div className={`spell spell-${spell.image}`}></div>
                      </td>
                      <td>{spell.name}</td>
                      <td>{spell.description}</td>
                      <td>
                        {spell.victories.map((victory, index) => (
                          <small key={index} className='d-block'>
                            {victory} - lvl {index + 1}
                          </small>
                        ))}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <p className='uppercase color-alacris'>Mestre Alacris</p>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className='text-bold'>Nome</th>
                <th className='text-bold'>Poder</th>
                <th className='text-bold'>Vitórias necessárias</th>
              </tr>
            </thead>
            <tbody>
              {spells?.map(spell => {
                if (spell.typeMaster === TypeMasterEnum.Alacris) {
                  return (
                    <tr key={spell.name}>
                      <td>
                        <div className={`spell spell-${spell.image}`}></div>
                      </td>
                      <td>{spell.name}</td>
                      <td>{spell.description}</td>
                      <td>
                        {spell.victories.map((victory, index) => (
                          <small key={index} className='d-block'>
                            {victory} - lvl {index + 1}
                          </small>
                        ))}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GrimoirePage;
