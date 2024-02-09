import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load all todos here
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);
  const todoInfo = {
    todos,
    setTodos,
  };
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
