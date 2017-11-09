import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import config from './config';

const serverRender = () => {
  return axios
    .get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={resp.data} />,
        ),
        initialData: resp.data,
      };
    })
    .catch(console.error);
};

export default serverRender;
