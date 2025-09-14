import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { initialTasks } from "./assets/tasks-data";
import { calculateSummary } from "./utils/calculateSummery";

export default function App() {
  // State management with hooks
  const [tasks, setTasks] = useState(initialTasks);

  // Add a new task (lifting state up from TaskInput)
  const addTask = (taskText) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: taskText, done: false }
    ]);
  };

  // Toggle task done status
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Derived value (summary of completed tasks)
  const summary = calculateSummary(tasks);

  return (
    <div>
      {/* Header component with props */}
      <AppHeader title="React Task Manager" summary={summary} />

      {/* Input form - two-way binding */}
      <TaskInput onAddTask={addTask} />

      {/* List rendering with props & events */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
// end