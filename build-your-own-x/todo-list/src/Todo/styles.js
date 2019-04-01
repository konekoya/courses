import styled from "styled-components";

export const TodoContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 140px 80px;
  width: 750px;
  font-family: "Varela Round", sans-serif;
`;

export const NewTodoBtn = styled.button`
  position: absolute;
  top: calc(100% - 90px);
  left: 50%;
  margin-left: -90px;
  width: 180px;
  height: 180px;
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
