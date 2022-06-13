import React from "react";

const NewTodo = () => {
  return (
    <form>
      <label htmlFor="text">Task:</label>
      <input type="text" id="text" />
      <button>Add Task</button>
    </form>
  );
};

export default NewTodo;
