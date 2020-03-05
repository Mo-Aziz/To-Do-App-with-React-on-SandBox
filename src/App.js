import React from "react";
import Greeting from "./components/Greeting";

import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <div>
      <Greeting />
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;
