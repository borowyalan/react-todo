import React, { useState } from 'react';
import Task from './Task';
import './TodoList.css';

function TodoList() {

    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    return (
        <div className="todoListContainer">
            <div className="header">
                <h1 className="heading">
                    What are your plans for today?
                </h1>
                <form>
                    <input placeholder="Enter name of the task here 🖊️"/>
                    <button type="submit"><span role="img" aria-label="OK hand">👌</span></button>
                </form>
            </div>

            <div className="main">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
