import React from "react";
import * as moment from "moment";

import PlugIcon from "./PlugIcon";

const Todo = () => {
  const handleNewTodo = e => {
    e.preventDefault();
    console.log("add..");
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <span className="date">{moment().format("D MMMM YYYY")}</span>
        <span className="day">{moment().format("dddd")}</span>
      </div>

      <button className="new-todo-btn" onClick={handleNewTodo}>
        <PlugIcon width="20" height="20" fill="#46BE8B" />
      </button>
    </div>
  );
};

export default Todo;
