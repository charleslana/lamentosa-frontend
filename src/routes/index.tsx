import HomePage from '../modules/home/pages/HomePage';
import Loading from '../shared/components/Loading';
import LoginPage from '../modules/login/pages/LoginPage';
import Modal from '../shared/components/Modal';
import NotFoundPage from '../shared/pages/NotFoundPage';
import React from 'react';
import RegisterPage from '../modules/register/pages/RegisterPage';
import ScrollToTop from '../shared/components/ScrollToTop';
import TermsOfService from '../shared/pages/TermsOfService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Modal />
      <ScrollToTop />
      <Loading />
    </Router>
  );
}

export default index;
