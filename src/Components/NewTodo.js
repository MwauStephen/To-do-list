import React, { useState } from "react";
import Button from "./Button";
import Card from "../UI/Card";
import styles from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  //   submit overall form values
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTask.trim().length === 0) {
      return;
    }
    console.log(enteredTask);

    // clear user input after submission
    setEnteredTask("");

    // lifting state up
    props.onAddToDo(enteredTask);
  };

  //   get user input
  const addTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Task</label>
        <input
          type="text"
          id="text"
          onChange={addTaskHandler}
          value={enteredTask}
        />
        <Button>Add task</Button>
      </form>
    </Card>
  );
};

export default NewTodo;
