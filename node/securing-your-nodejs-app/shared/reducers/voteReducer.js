'use strict';
import * as types from '../constants/actionTypes';
import { votingResultsState } from '../constants/initialState';

export default function voteReducer(state = votingResultsState, action) {
  switch (action.type) {
    case types.VOTE_RESULTS_REQUEST:
      return Object.assign({}, state, {
        isRequested: true,
      });
    case types.VOTE_RESULTS_SUCCESS:
      return Object.assign({}, state, {
        isRequested: false,
        votingResults: action.votingResults,
      });
    case types.VOTE_RESULTS_FAILURE:
      return Object.assign({}, state, {
        isRequested: false,
        errorMessage: action.errorMessage,
      });
    default:
      return state;
  }
}
