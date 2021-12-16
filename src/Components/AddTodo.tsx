import React, { useContext, useState } from "react";
import { BASE_URL } from "../App";
import { TodoContext } from "./Todo";

const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const todoContext = useContext(TodoContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value); // DOM Element of input
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newTodo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          console.log(data.todo);
          todoContext.setTodos((prev) => [...prev, data.todo]);
        }
      });
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
