import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../App";
import { Todo } from "../types/types";
import AddTodo from "./AddTodo";

export const TodoContext = createContext<{
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}>({
  setTodos: () => {},
});
// 							Function Component
const TodoCom: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodos = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  useEffect(() => {
    fetch(BASE_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setTodos(data.todos);
        }
      });
  }, []);

  return (
    <TodoContext.Provider value={{ setTodos }}>
      <div>
        {todos.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}

        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoCom;
