import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return <li className={styles.li}>{props.text}</li>;
};

export default TodoItem;
