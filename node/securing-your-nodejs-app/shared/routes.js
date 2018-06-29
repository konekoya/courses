import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/index';
import About from './components/about/about';
import TimelineContainer from './components/timeline/timelineContainer';
import RegistrationContainer from './components/auth/registrationContainer';
import LoginContainer from './components/auth/loginContainer';
import VotingResultsContainer from './components/votingResults/votingResultContainer';
import NotFoundPage from './components/common/notFoundPage';

export default (
  <Route component={App} path="/">
    <IndexRoute component={TimelineContainer} />
    <Route path="login(?returnUrl=:returnUrl)" component={LoginContainer} />
    <Route path="register" component={RegistrationContainer} />
    <Route path="about" component={About} />
    <Route path="results" component={VotingResultsContainer} />
    <Route path="timeline" component={TimelineContainer}>
      <Route path=":event" component={TimelineContainer} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
