import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import * as moment from "moment";

import PlugIcon from "./PlugIcon";
import { TodoContainer, NewTodoBtn } from "./styles";

export const StyledModal = styled(Modal)`
  position: relative;
  overflow: auto;
  outline: none;
  margin: auto;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
  width: 290px;
`;

const Todo = () => {
  const [todo, setTodo] = useState([]);
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
      <div className="todo-header">
        <span className="date">{moment().format("D MMMM YYYY")}</span>
        <span className="day">{moment().format("dddd")}</span>
      </div>

      {todo.map(t => {
        return <li key={t}>{t}</li>;
      })}

      <StyledModal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={handleCloseModal}
      >
        <button onClick={handleCloseModal}>Close Modal</button>
      </StyledModal>

      <NewTodoBtn className="new-todo-btn" onClick={handleNewTodo}>
        <PlugIcon width="20" height="20" fill="#46BE8B" />
      </NewTodoBtn>
    </TodoContainer>
  );
};

export default Todo;
