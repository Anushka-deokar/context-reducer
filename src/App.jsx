// App.jsx
import React from "react";
import { TaskProvider } from "./components/TasksContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
