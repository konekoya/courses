'use strict';

import * as types from '../constants/actionTypes';
import authenticationApi from '../api-services/authenticationApi';
import { routerActions } from 'react-router-redux';

function userDataUpdate(user) {
  return {
    type: types.USERDATA_UPDATED,
    user,
  };
}

function userAuthenticationRequested() {
  return {
    type: types.LOGIN_REQUEST,
    isAuthenticated: false,
    isRequested: true,
  };
}

function userAuthenticationSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isRequested: false,
    isAuthenticated: true,
    user,
  };
}

function userAuthenticationFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    isAuthenticated: false,
    isRequested: false,
    error,
  };
}

function userLogoutRequested() {
  return {
    type: types.LOGOUT_REQUEST,
    isRequested: true,
  };
}

function userLogoutSuccessful() {
  return {
    type: types.LOGOUT_SUCCESS,
    isRequested: false,
  };
}

function userLogoutFailure(errorMessage) {
  return {
    type: types.LOGOUT_FAILURE,
    isRequested: true,
    errorMessage,
  };
}

function userRegistrationRequested() {
  return {
    type: types.REGISTRATION_REQUEST,
    isRequested: true,
    isRegistered: false,
  };
}

function userRegistrationSuccess(message) {
  return {
    type: types.REGISTRATION_SUCCESS,
    isRequested: false,
    isRegistered: true,
    message,
  };
}

function userRegistrationFailure(errors) {
  return {
    type: types.REGISTRATION_FAILURE,
    isRequested: false,
    isRegistered: false,
    errors,
  };
}

export function login(creds, returnUrl) {
  return dispatch => {
    dispatch(userAuthenticationRequested());
    authenticationApi
      .login(creds)
      .then(user => {
        dispatch(userAuthenticationSuccess(user));
        dispatch(userDataUpdate(user));
        dispatch(routerActions.push(returnUrl || '/'));
      })
      .catch(error => {
        dispatch(userAuthenticationFailure(error.data));
      });
  };
}

export function logout() {
  return dispatch => {
    dispatch(userLogoutRequested());

    authenticationApi
      .logout()
      .then(() => {
        dispatch(userLogoutSuccessful());
        dispatch(userDataUpdate({}));
        dispatch(routerActions.push('/'));
      })
      .catch(err => {
        dispatch(userLogoutFailure(err));
      });
  };
}

export function register(user) {
  return dispatch => {
    dispatch(userRegistrationRequested());

    return authenticationApi
      .register(user)
      .then(function(message) {
        dispatch(userRegistrationSuccess(message));
        dispatch(routerActions.push('/login'));
      })
      .catch(function(errors) {
        dispatch(userRegistrationFailure(errors));
      });
  };
}
