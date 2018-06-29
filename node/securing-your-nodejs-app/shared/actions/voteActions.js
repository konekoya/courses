'use strict';

import * as types from '../constants/actionTypes';
import votingApi from '../api-services/votingApi';
import { routerActions } from 'react-router-redux';
import { displayNotification } from '../lib/utility';

function eventVoteSent() {
  return {
    type: types.EVENT_VOTE_SENT,
    isRequested: true,
  };
}

function eventVoteCasted(vote) {
  return {
    type: types.EVENT_VOTE_CASTED,
    isRequested: false,
    vote,
  };
}

function eventVoteFailure(errorMessage) {
  return {
    type: types.EVENT_VOTE_FAILURE,
    errorMessage,
  };
}

function votingResultsRequested() {
  return {
    type: types.VOTE_RESULTS_REQUEST,
    isRequested: true,
  };
}

function votingResultsReceived(votingResults) {
  return {
    type: types.VOTE_RESULTS_SUCCESS,
    isRequested: true,
    votingResults,
  };
}

function votingResultsRequestFailure(errorMessage) {
  return {
    type: types.VOTE_RESULTS_FAILURE,
    isRequested: false,
    errorMessage,
  };
}

export function voteForEvent(timelineItem, user) {
  return async function(dispatch) {
    dispatch(eventVoteSent());

    try {
      const vote = await votingApi.vote(timelineItem._id, 'popular');
      dispatch(eventVoteCasted(vote));

      const message = `Thanks ${
        user.firstName
      } for voting! You successfully voted for ${timelineItem.name}`;
      displayNotification('success', null, message);
    } catch (error) {
      dispatch(eventVoteFailure(error.statusText));

      if (error.status == 409) {
        dispatch(routerActions.push(`/login?returnUrl=timeline/${eventId}`));
      }
    }
  };
}

export function getVotingResults() {
  return async function(dispatch) {
    dispatch(votingResultsRequested());

    try {
      const votingResults = await votingApi.getVotingResults();
      dispatch(votingResultsReceived(votingResults));
    } catch (error) {
      dispatch(votingResultsRequestFailure(error.statusText));
    }
  };
}
