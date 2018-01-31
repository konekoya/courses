import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
