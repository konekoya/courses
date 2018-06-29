'use strict';
export const timelineState = {
  timelineItems: [],
  isRequested: false,
  filterCriteria: {
    startDate: '',
    endDate: '',
    stackOrientation: false,
  },
};

export const registrationState = {
  isAuthenticated: false,
  isRequested: false,
  isRegistered: false,
  errors: {},
  registration: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

export const loginState = {
  isAuthenticated: false,
  isRequested: false,
  errors: {},
  creds: {
    username: '',
    password: '',
  },
};

export const userState = {
  user: {},
  votes: [],
};

export const votingResultsState = {
  isRequested: false,
  votingResults: [],
};
