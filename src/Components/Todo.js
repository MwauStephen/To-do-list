import React from "react";
import TodoItem from "./TodoItem";

const Todo = (props) => {
  const items = ["Node-js", "php", "react-js"];

  return (
    <ul>
      {items.map((item) => {
        return <TodoItem text={item} />;
      })}
    </ul>
  );
};

export default Todo;
