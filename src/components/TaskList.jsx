import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onToggle, onDelete}) {
    if(tasks.length ===0){
        return <p>No tasks available, Add one above</p>
    }
  return (
    <ul>
        {tasks.map((task) => (
            <TaskItem 
                key = {task.id}
                task = {task}
                onToggle={() => onToggle(task.id)}
                onDelete={() => onDelete(task.id)}
            />
        ))}
    </ul>
  )
}

export default TaskList
