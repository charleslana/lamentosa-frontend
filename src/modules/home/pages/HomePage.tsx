import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import ITopPlayersVampires from '../interfaces/ITopPlayersVampires';
import NavBar from '../../../shared/components/NavBar';
import React, { useEffect, useState } from 'react';
import translate from '../../../translate/translate';
import { Link } from 'react-router-dom';

function HomePage() {
  const [topPlayersVampires, setTopPlayersVampires] =
    useState<ITopPlayersVampires[]>();

  const dataTopPlayersVampires: ITopPlayersVampires[] = [
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

  useEffect(() => {
    requestHome();
  }, []);

  const requestHome = async () => {
    setTopPlayersVampires(dataTopPlayersVampires);
  };

  const validateBar = (min: number, max: number): number => {
    const total = (min / max) * 115;
    if (total > 115) return 115;
    return total;
  };

  return (
    <>
      <Header />
      <NavBar />
      <main>
        <h1 className='text-center'>{translate.home.title}</h1>
        <p>{translate.home.detail1}</p>
        <br />
        <p>{translate.home.detail2}</p>
        <br />
        <p>{translate.home.detail3}</p>
        <Link to='/register'>
          <button className='m-auto'>{translate.home.button}</button>
        </Link>
        <h2>{translate.home.subTitle1}</h2>
        <p>{translate.home.detail4}</p>
        <br />
        <p>{translate.home.detail5}</p>
        <br />
        <p>{translate.home.detail6}</p>
        <h2>{translate.home.subTitle2}</h2>
        <p>{translate.home.detail7}</p>
        <br />
        <p>{translate.home.detail8}</p>
        <br />
        <p>{translate.home.detail9}</p>
        <h2>{translate.home.subTitle3}</h2>
        <p>{translate.home.detail10}</p>
        <br />
        <p>{translate.home.detail11}</p>
        <br />
        <p>{translate.home.detail12}</p>
        <br />
        <p>{translate.home.detail13}</p>
        <Link to='/register'>
          <button className='m-auto'>{translate.home.button}</button>
        </Link>
        <h2>{translate.home.subTitle4}</h2>
        <div className='tops-vampire'>
          {topPlayersVampires?.map(vampire => (
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
              <div className='frame-bar'>
                <div
                  className='frame-bar-life'
                  style={{
                    width: validateBar(vampire.minLife, vampire.maxLife),
                  }}
                >
                  <span>
                    {vampire.minLife}/{vampire.maxLife}
                  </span>
                </div>
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
