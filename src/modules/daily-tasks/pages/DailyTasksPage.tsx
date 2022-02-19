import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
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
  isCompleted: boolean;
  isFinished: boolean;
}

function DailyTasksPage() {
  const [tasks, setTasks] = useState<IDailyTasks[]>();

  const dataTasks: IDailyTasks[] = [
    {
      day: 1,
      rewards: {
        gold: 448,
      },
      isCompleted: true,
      isFinished: true,
    },
    {
      day: 2,
      rewards: {
        gold: 498,
      },
      isCompleted: true,
      isFinished: false,
    },
    {
      day: 3,
      rewards: {
        gold: 528,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 4,
      rewards: {
        gold: 608,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 5,
      rewards: {
        item: 'um item raro',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 6,
      rewards: {
        gold: 720,
        grimoirePoints: 10,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 7,
      rewards: {
        gold: 740,
        grimoirePoints: 15,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 8,
      rewards: {
        gold: 750,
        grimoirePoints: 20,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 9,
      rewards: {
        item: 'um item raro',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 10,
      rewards: {
        gold: 760,
        enchantmentPoints: 10,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 11,
      rewards: {
        gold: 770,
        enchantmentPoints: 15,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 12,
      rewards: {
        gold: 780,
        enchantmentPoints: 20,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 13,
      rewards: {
        item: 'um item de elite',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 14,
      rewards: {
        grimoireBoost: 3,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 15,
      rewards: {
        grimoireBoost: 6,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 16,
      rewards: {
        grimoireBoost: 9,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 17,
      rewards: {
        grimoireBoost: 12,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 18,
      rewards: {
        gold: 1748,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 19,
      rewards: {
        item: 'um item de elite',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 20,
      rewards: {
        grimoirePoints: 25,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 21,
      rewards: {
        grimoirePoints: 30,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 22,
      rewards: {
        grimoirePoints: 35,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 23,
      rewards: {
        grimoirePoints: 40,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 24,
      rewards: {
        item: 'um item de elite',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 25,
      rewards: {
        gold: 1148,
        enchantmentPoints: 25,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 26,
      rewards: {
        gold: 1148,
        enchantmentPoints: 30,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 27,
      rewards: {
        gold: 1148,
        enchantmentPoints: 35,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 28,
      rewards: {
        item: 'um item de elite',
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 29,
      rewards: {
        grimoirePoints: 100,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 30,
      rewards: {
        gold: 2248,
      },
      isCompleted: false,
      isFinished: false,
    },
    {
      day: 31,
      rewards: {
        item: 'um item lendário',
      },
      isCompleted: false,
      isFinished: false,
    },
  ];

  useEffect(() => {
    requestDailyTasks();
  }, []);

  const requestDailyTasks = async () => {
    setTasks(dataTasks);
  };

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
              {tasks?.map(reward => (
                <tr key={reward.day}>
                  <td className='text-bold'>{reward.day}</td>
                  <td>
                    {reward.rewards?.gold ? (
                      <p>Ouro: {reward.rewards.gold}</p>
                    ) : (
                      ''
                    )}
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
                  <td className='green text-bold'>
                    {reward.isFinished ? (
                      'Concluído'
                    ) : reward.isCompleted ? (
                      <button>Reivindicar</button>
                    ) : (
                      <button disabled>Reivindicar</button>
                    )}
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

export default DailyTasksPage;
