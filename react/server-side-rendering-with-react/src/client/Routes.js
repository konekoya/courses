import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
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
    ],
  },
];
