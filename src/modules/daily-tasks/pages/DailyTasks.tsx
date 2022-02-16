import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarDailyTasks from '../components/TabBarDailyTasks';

interface IDailyTasks {
  day: number;
  rewards: {
    gold?: number;
    item?: string;
    grimoirePoints?: number;
    enchantmentPoints?: number;
    grimoireBoost?: number;
  };
}

function DailyTasks() {
  const rewards: IDailyTasks[] = [
    {
      day: 1,
      rewards: {
        gold: 448,
      },
    },
    {
      day: 2,
      rewards: {
        gold: 498,
      },
    },
    {
      day: 3,
      rewards: {
        gold: 528,
      },
    },
    {
      day: 4,
      rewards: {
        gold: 608,
      },
    },
    {
      day: 5,
      rewards: {
        item: 'um item raro',
      },
    },
    {
      day: 6,
      rewards: {
        gold: 720,
        grimoirePoints: 10,
      },
    },
    {
      day: 7,
      rewards: {
        gold: 740,
        grimoirePoints: 15,
      },
    },
    {
      day: 8,
      rewards: {
        gold: 750,
        grimoirePoints: 20,
      },
    },
    {
      day: 9,
      rewards: {
        item: 'um item raro',
      },
    },
    {
      day: 10,
      rewards: {
        gold: 760,
        enchantmentPoints: 10,
      },
    },
    {
      day: 11,
      rewards: {
        gold: 770,
        enchantmentPoints: 15,
      },
    },
    {
      day: 12,
      rewards: {
        gold: 780,
        enchantmentPoints: 20,
      },
    },
    {
      day: 13,
      rewards: {
        item: 'um item de elite',
      },
    },
    {
      day: 14,
      rewards: {
        grimoireBoost: 3,
      },
    },
    {
      day: 15,
      rewards: {
        grimoireBoost: 6,
      },
    },
    {
      day: 16,
      rewards: {
        grimoireBoost: 9,
      },
    },
    {
      day: 17,
      rewards: {
        grimoireBoost: 12,
      },
    },
    {
      day: 18,
      rewards: {
        gold: 1748,
      },
    },
    {
      day: 19,
      rewards: {
        item: 'um item de elite',
      },
    },
    {
      day: 20,
      rewards: {
        grimoirePoints: 25,
      },
    },
    {
      day: 21,
      rewards: {
        grimoirePoints: 30,
      },
    },
    {
      day: 22,
      rewards: {
        grimoirePoints: 35,
      },
    },
    {
      day: 23,
      rewards: {
        grimoirePoints: 40,
      },
    },
    {
      day: 24,
      rewards: {
        item: 'um item de elite',
      },
    },
    {
      day: 25,
      rewards: {
        gold: 1148,
        enchantmentPoints: 25,
      },
    },
    {
      day: 26,
      rewards: {
        gold: 1148,
        enchantmentPoints: 30,
      },
    },
    {
      day: 27,
      rewards: {
        gold: 1148,
        enchantmentPoints: 35,
      },
    },
    {
      day: 28,
      rewards: {
        item: 'um item de elite',
      },
    },
    {
      day: 29,
      rewards: {
        grimoirePoints: 100,
      },
    },
    {
      day: 30,
      rewards: {
        gold: 2248,
      },
    },
    {
      day: 31,
      rewards: {
        item: 'um item lendário',
      },
    },
  ];

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h2 className='title text-center text-bold'>Tarefas Diárias</h2>
        <TabBarDailyTasks />
        <div className='daily-tasks'>
          <div className='icon-pvp-ranking'></div>
          <div className='d-flex items-center'>
            <div>
              <p>Dia: 1</p>
              <small className='text-bold'>Vitórias hoje: 0</small>
            </div>
          </div>
        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th>Dia</th>
                <th>Recompensas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rewards.map(reward => (
                <tr key={reward.day}>
                  <td>{reward.day}</td>
                  <td>
                    {reward.rewards?.gold ? <p>Ouro: 448</p> : ''}
                    {reward.rewards?.item ? (
                      <p>Item: {reward.rewards.item}</p>
                    ) : (
                      ''
                    )}
                    {reward.rewards?.grimoirePoints ? (
                      <p>
                        Pontos de grimório: {reward.rewards?.grimoirePoints}
                      </p>
                    ) : (
                      ''
                    )}
                    {reward.rewards?.enchantmentPoints ? (
                      <p>
                        Pontos de encantamento:{' '}
                        {reward.rewards?.enchantmentPoints}
                      </p>
                    ) : (
                      ''
                    )}
                    {reward.rewards?.grimoireBoost ? (
                      <p>
                        Impulso de grimório: {reward.rewards?.grimoireBoost}
                      </p>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    <button>Reivindicar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DailyTasks;
