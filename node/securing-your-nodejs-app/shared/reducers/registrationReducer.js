'use strict';
import * as types from '../constants/actionTypes';
import { registrationState } from '../constants/initialState';

export default function registrationReducer(state = registrationState, action) {
  switch (action.type) {
    case types.REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        isRequested: true,
        isRegistered: false,
      });
    case types.REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        isRequested: false,
        isRegistered: true,
        message: action.message,
      });
    case types.REGISTRATION_FAILURE:
      return Object.assign({}, state, {
        isRequested: false,
        isRegistered: false,
        errors: action.errors,
      });
    default:
      return state;
  }
}
