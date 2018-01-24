import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../client/reducers';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
