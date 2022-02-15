import React from 'react';
import routes from '../../../routes/routes';
import { Link } from 'react-router-dom';

function TabBarDailyTasks() {
  return (
    <nav>
      <Link to={routes.dailyTasks}>Recompensas</Link>
      <Link to={routes.dailyTasksHistoric}>Histórico</Link>
      <button>Instruções</button>
    </nav>
  );
}

export default TabBarDailyTasks;
