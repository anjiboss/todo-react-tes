import React from "react";
import "./App.css";
import TodoCom from "./Components/Todo";

export const BASE_URL = "http://localhost:5000/v1/api/todo";

function App() {
  return (
    <div>
      {/* Todo List Goes Here */}
      <TodoCom />
      {/* Adding New Todo Goes Here */}
    </div>
  );
}

export default App;
