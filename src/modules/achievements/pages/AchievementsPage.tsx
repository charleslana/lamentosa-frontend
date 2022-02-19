import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IAchievement from '../interfaces/IAchievement';
import InfoAchievement from '../components/InfoAchievement';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';

function AchievementsPage() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [achievements, setAchievements] = useState<IAchievement[]>();

  const dataAchievements: IAchievement[] = [
    {
      name: 'Soulmate',
      description:
        'Case-se com alguém e você receberá essa conquista. Para se casar basta clicar em "Solteiro" no seu perfil.',
      min: 0,
      max: 1,
    },
    {
      name: 'Saboteur',
      description:
        'Encontre 20 sabotagens, caso consiga você receberá +1 espaço adicional permanente no seu inventório.',
      min: 0,
      max: 20,
    },
    {
      name: 'Sentinel',
      description:
        'Encontre 20 anti-sabotagens, caso consiga você receberá +1 espaço adicional permanente no seu inventório.',
      min: 0,
      max: 20,
    },
    {
      name: 'Obsession',
      description:
        'Mantenha-se no top 15 do ranking PvP por 30 dias seguidos, então você receberá essa conquista que garante um bônus de +10% na premiação diária do ranking. Atenção: Se falhar um único dia todo o progresso será perdido.',
      min: 0,
      max: 30,
    },
    {
      name: 'Hunter',
      description:
        'Derrote 96 criaturas difíceis, se conseguir você receberá +2 caças adicionais permanentes.',
      min: 0,
      max: 96,
    },
    {
      name: 'Slayer',
      description:
        'Derrote 1000 inimigos da sua raça, se conseguir você receberá o título de SLAYER!',
      min: 7,
      max: 1000,
    },
    {
      name: 'Genocidal',
      description:
        'Derrote 5000 inimigos da sua raça, se conseguir você receberá o título de GENOCIDAL!',
      min: 0,
      max: 5000,
    },
    {
      name: 'Warlord',
      description:
        'Derrote 15000 inimigos da sua raça, se conseguir você receberá o título de WARLORD!',
      min: 0,
      max: 15000,
    },
    {
      name: 'Investor',
      description:
        'Doe 30.000.000 para o seu clã, se fizer isso você receberá 5% do total arrecadado no mês todos os sábados às 07:21! Essa conquista ficará ativa apenas para Anciãos (nível 50+).',
      min: 0,
      max: 30000000,
    },
  ];

  useEffect(() => {
    requestAchievements();
  }, []);

  const requestAchievements = async () => {
    setAchievements(dataAchievements);
  };

  const setAchievement = (achievement: IAchievement) => {
    setName(achievement.name);
    setDescription(achievement.description);
    showModal();
  };

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Conquistas</h1>
        <small className='d-block text-center mb-2'>
          Conquistas podem desbloquear algumas funcionalidades e status, tente
          conseguir todas!
        </small>
        {achievements?.map(achievement => (
          <div key={achievement.name} className='achievements'>
            <div className='divider'>
              <div
                className={`icon-achievements icon-${achievement.name.toLowerCase()}`}
              ></div>
              <h3>{achievement.name}</h3>
            </div>
            <div className='divider'>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{
                    width: `${
                      (Number(achievement.min) * Number(achievement.max)) /
                      Number(achievement.max)
                    }%`,
                  }}
                ></div>
                <p>
                  {achievement.min} / {achievement.max}
                </p>
              </div>
              <div
                className='icon-info'
                onClick={() => setAchievement(achievement)}
              ></div>
            </div>
          </div>
        ))}
      </main>
      {modal ? (
        <CustomModal
          children={<InfoAchievement name={name} description={description} />}
          showModal={showModal}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default AchievementsPage;
