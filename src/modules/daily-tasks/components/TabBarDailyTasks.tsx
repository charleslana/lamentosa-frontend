import CustomModal from '../../../shared/components/CustomModal';
import Instructions from './Instructions';
import React, { useState } from 'react';
import routes from '../../../routes/routes';
import { Link } from 'react-router-dom';

function TabBarDailyTasks() {
  const [modalInstructions, setModalInstructions] = useState(false);

  const showInstructions = () => {
    setModalInstructions(!modalInstructions);
  };

  return (
    <>
      <nav>
        <Link to={routes.dailyTasks}>Recompensas</Link>
        <Link to={routes.dailyTasksHistoric}>Histórico</Link>
        <button onClick={showInstructions}>Instruções</button>
      </nav>
      {modalInstructions ? (
        <CustomModal children={<Instructions />} showModal={showInstructions} />
      ) : (
        ''
      )}
    </>
  );
}

export default TabBarDailyTasks;
