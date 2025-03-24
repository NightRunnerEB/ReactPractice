import React from "react";
import TodoAppClass from "./components/TodoAppClass";

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Задачи (ToDo List)</h2>
      <TodoAppClass />
    </div>
  );
};

export default App;
