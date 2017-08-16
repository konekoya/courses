const initState = {
  todos: [
    { id: 1, name: 'Create a store', isComplete: true },
    { id: 2, name: 'Load state through the store', isComplete: true },
    { id: 3, name: 'Handle state changes with redux', isComplete: false },
  ],
  currentTodo: 'temp',
};

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
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
