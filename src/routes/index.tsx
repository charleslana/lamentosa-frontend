import HomePage from '../modules/home/pages/HomePage';
import LoginPage from '../modules/login/pages/LoginPage';
import NotFoundPage from '../shared/pages/NotFoundPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default index;
