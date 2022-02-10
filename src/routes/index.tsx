import HomePage from '../modules/home/pages/HomePage';
import LoginPage from '../modules/login/pages/LoginPage';
import NotFoundPage from '../shared/pages/NotFoundPage';
import React from 'react';
import RegisterPage from '../modules/register/pages/RegisterPage';
import ScrollToTop from '../shared/components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default index;
