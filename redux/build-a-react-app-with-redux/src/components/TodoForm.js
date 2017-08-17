import React from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todo';

const TodoForm = props => {
  const { currentTodo, updateCurrent } = props;
  const handleInputChange = e => {
    const val = e.target.value;
    updateCurrent(val);
  };
  return (
    <form>
      <input type="text" value={currentTodo} onChange={handleInputChange} />
    </form>
  );
};

export default connect(state => ({ currentTodo: state.currentTodo }), {
  updateCurrent,
})(TodoForm);
