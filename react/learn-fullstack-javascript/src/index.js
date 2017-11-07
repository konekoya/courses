import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import '../css/styles.css';

ReactDOM.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root'),
);
