import React, { useState } from 'react'
import AppHeader from './components/AppHeader'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { initialTasks } from './assets/tasks-data'
import { calculateSummary } from './utils/calculateSummery'

function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const addTask  = (taskText) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {id: Date.now(), text: taskText, done: false}
    ])
  }
  const toggleTask = (taskId) => {
    setTasks((prevTasks) => (
      prevTasks.map((task) => (
        task.id == taskId ? {...tasks, done: task.done} : task 
      ))
    ))
  }

  return (
    <div>
      
    </div>
  )
}

export default App
