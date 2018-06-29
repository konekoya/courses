'use strict';
/* eslint-disable no-console */

require('../shared/lib/extensions');
import express, { Router } from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import { initialize } from './initializationTasks';
import webpack from 'webpack';
import sessionManagementConfig from './configurations/sessionsManagementConfig';
import apiRouteConfig from './configurations/apiRoutesConfig';
import webpackConfig from '../webpack.config.dev.js';
import open from 'open';
import path from 'path';
import React from 'react';

const port = 7000;
const app = express();
const compiler = webpack(webpackConfig);

sessionManagementConfig(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  '/fonts/',
  express.static(path.join(__dirname, './shared/assets/fonts')),
);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.use(favicon('./shared/assets/images/favicon.ico'));
express.static.mime.define({ 'text/css': ['css'] });
express.static.mime.define({ 'application/x-font-woff': ['woff'] });
express.static.mime.define({ 'application/x-font-ttf': ['ttf'] });
express.static.mime.define({ 'application/vnd.ms-fontobject': ['eot'] });
express.static.mime.define({ 'font/opentype': ['otf'] });

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }),
);

app.use(require('webpack-hot-middleware')(compiler));

apiRouteConfig(app);

initialize()
  .then(function() {
    app.listen(port, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Express server listening at http://localhost:${port}`);
        open(`http://localhost:${port}`);
      }
    });
  })
  .catch(function(err) {
    console.log(err);
  });
