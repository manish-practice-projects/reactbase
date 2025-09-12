import React from 'react'
import "./styles/TaskItem.css";
import Button from './Button';

function TaskItem({task, onToggle, onDelete}) {
    const taskClass = task.done ? "task-done" : "task";
  return (
    <li className={taskClass} >
        <span onClick={onToggle} > {task.text} </span>
        <Button onClick={onDelete}>❌</Button>
    </li>
  )
}

export default TaskItem
