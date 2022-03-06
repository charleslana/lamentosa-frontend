import CustomModal from '../../../shared/components/CustomModal';
import Instructions from './Instructions';
import React, { useState } from 'react';
import routes from '../../../routes/routes';
import { Link, useLocation } from 'react-router-dom';

function TabBarDailyTasks() {
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();

  const showInstructions = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav>
        <Link
          to={routes.dailyTasks}
          className={pathname === routes.dailyTasks ? 'active' : ''}
        >
          Recompensas
        </Link>
        <Link
          to={routes.dailyTasksHistoric}
          className={
            pathname.includes(routes.dailyTasksHistoric) ? 'active' : ''
          }
        >
          Histórico
        </Link>
        <button onClick={showInstructions}>Instruções</button>
      </nav>
      {modal ? (
        <CustomModal children={<Instructions />} showModal={showInstructions} />
      ) : (
        ''
      )}
    </>
  );
}

export default TabBarDailyTasks;
