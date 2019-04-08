import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import PlugIcon from "./PlugIcon";
import Header from "./Header";
import { TodoContainer, NewTodoBtn } from "./styles";

export const StyledModal = styled(Modal)`
  position: relative;
  overflow: auto;
  outline: none;
  margin: auto;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
  width: 290px;
`;

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
`;

const TodoItem = styled.li`
  list-style: none;
  margin: 50px 0;

  .name {
    font-size: 16px;
    color: #3e434f;
  }

  &.is-completed {
    .name {
      color: #bdc0ca;
    }
  }
`;

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Buy a new sweatshirt", completed: false },
    { id: 2, name: "Read an article", completed: true },
    { id: 3, name: "Try not to fall asleep", completed: false }
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleNewTodo = e => {
    e.preventDefault();
    // setTodo([...todo, "new todo"]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TodoContainer>
      <Header />
      <TodoList>
        {todos.map(todo => {
          const { completed, name, id } = todo;
          return (
            <TodoItem key={id} className={completed ? "is-completed" : ""}>
              <div className="name">{name}</div>
              <span className="is-completed">{completed ? "Yes" : "Nope"}</span>
            </TodoItem>
          );
        })}
      </TodoList>

      <StyledModal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={handleCloseModal}
      >
        <button onClick={handleCloseModal}>Close Modal</button>
      </StyledModal>

      <NewTodoBtn className="new-todo-btn" onClick={handleNewTodo}>
        <PlugIcon width="25" height="25" fill="#46BE8B" />
      </NewTodoBtn>
    </TodoContainer>
  );
};

export default Todo;
