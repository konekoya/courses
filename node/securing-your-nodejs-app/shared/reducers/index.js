'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timelineReducer from './timeLineReducer';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import userDataReducer from './userDataReducer';
import voteReducer from './voteReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  timelineState: timelineReducer,
  loginState: loginReducer,
  registrationState: registrationReducer,
  userDataState: userDataReducer,
  votingResultsState: voteReducer,
  routing: routerReducer,
  form: formReducer,
});
