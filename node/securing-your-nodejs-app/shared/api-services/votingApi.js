'use strict';

import * as axios from 'axios';
import appSettings from '../constants/applicationSettings';
const client = axios.create({ baseURL: appSettings.serverPath });

export default {
  vote: function(eventId, voteType) {
    return client
      .post('/api/event/vote', {
        eventId,
        voteType,
      })
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        throw err;
      });
  },
  getVotingResults: function() {
    return client
      .get('/api/event/vote')
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        throw err;
      });
  },
};
