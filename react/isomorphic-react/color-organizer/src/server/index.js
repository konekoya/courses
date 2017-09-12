import React from 'react';
import ignoreStyles from 'ignore-styles';
import app from './app';

global.React = React;
const port = process.env.port || 3000;

app
  .set('port', port)
  .listen(app.get('port'), () =>
    console.log(
      `Color Organizer is running at port http://www.localhost:${port}`,
    ),
  );
