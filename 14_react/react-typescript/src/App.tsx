import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

// Types
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${Math.random()}-${text}`, text },
    ]);
  };

  const todoDeleteHandler = (todoID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoID);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList deleteHandler={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
