import styled from "styled-components";

export const TodoContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 140px 80px;
  width: 450px;

  .todo-header {
    display: flex;

    .day {
      margin-left: auto;
      text-transform: uppercase;
    }
  }
`;

export const NewTodoBtn = styled.button`
  position: absolute;
  top: calc(100% - 30px);
  left: 50%;
  margin-left: -20px;
  width: 60px;
  height: 60px;
  background-color: #50e3a3;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;
