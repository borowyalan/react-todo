import React, { useState } from 'react';
import Task from './Task';
import Form from './Form';
import './TodoList.css';

function TodoList() {

    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
        },
        {
            title: "Do your workout",
        },
        {
            title: "Hangout with friends",
        }
    ]);

    const addItem = (value) => {
        const newTasks = [...tasks, {title: value}]
        setTasks(newTasks)
    }

    const deleteItem = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div className="todoListContainer">
            <div className="header">
                <h1 className="heading">
                    What are your plans for today?
                </h1>
                <Form 
                    addItem={addItem}
                />
            </div>

            <div className="main">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        deleteItem={deleteItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
