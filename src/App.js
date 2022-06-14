import NewTodo from "./Components/NewTodo";
import Todo from "./Components/Todo";

const App = () => {
  const todos = ["node-js", "react-js", "php"];
  return (
    <div>
      <NewTodo />
      <Todo items={todos} />
    </div>
  );
};

export default App;
