import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    loadData,
    path: '/users',
  },
];
