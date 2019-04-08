import styled from "styled-components";

export const TodoContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 60px 50px;
  width: 380px;
  font-family: "Varela Round", sans-serif;
`;

export const NewTodoBtn = styled.button`
  position: absolute;
  top: calc(100% - 45px);
  left: 50%;
  margin-left: -45px;
  width: 90px;
  height: 90px;
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
