import React, { useState } from 'react'
import Button from './Button'

function TaskInput({onAddTask}) {

    const [text, setTextt] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            onAddTask(text);
            setTextt("");
        }
    }

  return (
    <form onSubmit = {handleSubmit}>
        <input
            type='text' value={text} placeholder='enter new task'
            onChange={(e) => setTextt(e.target.value)}
        />
    </form>
  )
}

export default TaskInput
