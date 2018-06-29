'use strict';

import * as axios from 'axios';
import appSettings from '../constants/applicationSettings';
const client = axios.create({ baseURL: appSettings.serverPath });

export default {
  register: function(user) {
    return client
      .post('/api/user/register', user)
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        throw err;
      });
  },

  login: function(creds) {
    return client
      .post('/api/user/login', creds)
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        throw err;
      });
  },

  logout: function() {
    return client
      .get('/api/user/logout')
      .then(function(response) {
        return response.status;
      })
      .catch(function(err) {
        throw err;
      });
  },
};
