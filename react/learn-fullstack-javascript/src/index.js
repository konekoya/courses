import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import '../css/styles.css';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root'),
);
