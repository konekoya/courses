import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        console.log(response);
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/feature');
      })
      .catch((error) => {
        dispatch(authError(error.toString()));
      });
  };
}

export const signoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  };
};
