import React from 'react'
import { useState } from 'react'
import AppHeader from './components/AppHeader'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { initialTasks } from './assets/tasks-data'
import { calculateSummary } from './utils/calculateSummery'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  //add new task
  const addTask = taskText => {
    setTasks(prev => [
      ...prev, {id: Date.now(), text: taskText, done: false}
    ])
  }

    //toggle task done status
    const toggleTask = taskId => {
      setTasks(prev => 
        prev.map(task =>
          task.id  === taskId ? {...task, done: !task.done} : task
        )
      )
    }
    //delete task
    const deleteTask = taskId => {
      setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    // Derived value (summary of completed tasks)
    const summary = calculateSummary(tasks);

  

  return (
    <div>
      <AppHeader title="react task manager" summary={summary} />
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
