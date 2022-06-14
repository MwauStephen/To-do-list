import React, { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todo from "./Components/Todo";

const App = () => {
  const [liftedTask, setLiftedTask] = useState([]);

  const addTodoHandler = (upliftedTask) => {
    setLiftedTask((prevTask) => {
      return [
        ...prevTask,
        {
          text: upliftedTask,
          id: new Date().toISOString(),
        },
      ];
    });
  };
  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler} />
      <Todo items={liftedTask} />
    </div>
  );
};

export default App;
