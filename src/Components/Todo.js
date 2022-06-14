import React from "react";
import TodoItem from "./TodoItem";
import Card from "../UI/Card";
import styles from "./Todo.module.css";

const Todo = () => {
  //   const items = ["Node-js", "php", "react-js"];

  return (
    <Card className={styles.task}>
      <ul>
        <TodoItem text="learn react-js" />
      </ul>
    </Card>
  );
};

export default Todo;
