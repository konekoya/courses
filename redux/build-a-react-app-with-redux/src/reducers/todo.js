import { getTodos, createTodo } from '../lib/todoServices.js';
import { showMessage } from './message';

const initState = {
  todos: [],
  currentTodo: '',
};

export const TODO_ADD = 'TODO_ADD';
export const TODO_LOAD = 'TODO_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodos = todos => ({ type: TODO_LOAD, payload: todos });
export const addTodo = todo => ({ type: TODO_ADD, payload: todo });

export const fetchTodos = () => {
  return dispatch => {
    dispatch(showMessage('Loading todo!'));
    getTodos().then(todos => dispatch(loadTodos(todos)));
  };
};

export const saveTodo = name => {
  return dispatch => {
    dispatch(showMessage('Saving todo!'));
    createTodo(name).then(res => dispatch(addTodo(res)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_LOAD:
      return {
        ...state,
        todos: action.payload,
      };
    case TODO_ADD:
      return {
        ...state,
        currentTodo: '',
        todos: [...state.todos, action.payload],
      };
    case CURRENT_UPDATE:
      return {
        ...state,
        currentTodo: action.payload,
      };
    default:
      return state;
  }
};
