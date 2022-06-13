import React from "react";
import styles from "./NewTodo.module.css";

const NewTodo = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Task:</label>
      <input type="text" id="text" />
      <button>Add Task</button>
    </form>
  );
};

export default NewTodo;
