import React, { createContext, useState } from "react";
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
