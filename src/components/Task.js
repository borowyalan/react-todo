import React from 'react'
import './Task.css'

export default function Task({task}) {
    return (
        <div className='task'>
            {task.title}
        </div>
    )
}
