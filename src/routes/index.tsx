import DailyTasksHistoricPage from '../modules/daily-tasks/pages/DailyTasksHistoricPage';
import DailyTasksPage from '../modules/daily-tasks/pages/DailyTasksPage';
import GrimoirePage from '../modules/grimoire/pages/GrimoirePage';
import HomePage from '../modules/home/pages/HomePage';
import Loading from '../shared/components/Loading';
import LoginPage from '../modules/login/pages/LoginPage';
import Modal from '../shared/components/Modal';
import NotFoundPage from '../shared/pages/NotFoundPage';
import React from 'react';
import RegisterPage from '../modules/register/pages/RegisterPage';
import routes from './routes';
import ScrollToTop from '../shared/components/ScrollToTop';
import SentinelsPage from '../modules/sentinels/pages/SentinelsPage';
import StatusPage from '../modules/status/pages/StatusPage';
import TermsOfServicePage from '../shared/pages/TermsOfServicePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.termsOfService} element={<TermsOfServicePage />} />
        <Route path={routes.status} element={<StatusPage />} />
        <Route path={routes.grimoire} element={<GrimoirePage />} />
        <Route path={routes.sentinels} element={<SentinelsPage />} />
        <Route path={routes.dailyTasks} element={<DailyTasksPage />} />
        <Route
          path={routes.dailyTasksHistoric}
          element={<DailyTasksHistoricPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Modal />
      <ScrollToTop />
      <Loading />
    </Router>
  );
}

export default index;
