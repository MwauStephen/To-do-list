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
          // id: Math.floor(Math.random().toString()),
        },
      ];
    });
  };
  // const addTodoHandler = (upliftedTask) => {
  //   setLiftedTask((prevTask) => {
  //     const newItems = {
  //       text: upliftedTask,
  //       id: new Date().toISOString(),
  //     };
  //     return prevTask.upliftedTask.concat(newItems);
  //   });
  // };

  // const removeHandler = (id) => {
  //   console.log("You clicked a list item");
  //   setLiftedTask((liftedTask) => {
  //     liftedTask.filter((task) => task.id !== id);
  //   });
  // };

  const removeHandler = (id) => {
    // setLiftedTask((prevTask) => {
    //   prevTask.filter((task) => {
    //     return task.id !== taskId;
    //   });
    // });

    const newTask = liftedTask.filter((task) => task.id !== id);
    console.log(newTask);
    setLiftedTask(newTask);
  };

  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler} />
      <Todo items={liftedTask} onRemoveTodo={removeHandler} />
    </div>
  );
};

export default App;
