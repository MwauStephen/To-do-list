import React from "react";
import TodoItem from "./TodoItem";
import Card from "../UI/Card";
import styles from "./Todo.module.css";

const Todo = (props) => {
  //   const items = ["Node-js", "php", "react-js"];

  return (
    <Card className={styles.task}>
      <ul>
        {props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              onRemoveTodo={props.onRemoveTodo.bind(this, item.id)}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Todo;
