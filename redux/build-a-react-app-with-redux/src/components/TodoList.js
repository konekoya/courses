import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../reducers/todo';

const TodoItem = ({ id, name, isComplete }) =>
  <li key={id}>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>;

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="Todo-list">
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todo.todos,
  }),
  {
    fetchTodos,
  },
)(TodoList);
