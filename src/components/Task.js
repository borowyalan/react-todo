import React from 'react'
import './Task.css'

export default function Task({task, deleteItem, index}) {
    return (
        <div className='task'>
            <span>
                {task.title}
            </span>
            <span 
                className='delete' 
                role="img" 
                aria-label="OK hand"
                onClick={() => deleteItem(index)}
                >
                ❌
            </span>
        </div>
    )
}
