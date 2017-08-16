import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { bindActionCreators } from 'redux';
import { updateCurrent } from './reducers/todo';
import store from './store';

const actions = bindActionCreators({ updateCurrent }, store.dispatch);

const todoChangeHandler = val => {
  store.dispatch(updateCurrent(val));
};

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={actions.updateCurrent}
    />,
    document.getElementById('root'),
  );
};

render();

store.subscribe(render);

registerServiceWorker();
