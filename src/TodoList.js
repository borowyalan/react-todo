import React from 'react';
import './TodoList.css';

function TodoList() {
    return (
        <div className="todoListContainer">
            <div className="header">
                <h1 className="heading">
                    What are your plans for today?
                </h1>
                <form action="">
                    <input placeholder="Enter name of the task here 🖊️"/>
                    <button type="submit"><span role="img" aria-label="OK hand">👌</span></button>
                </form>
            </div>

            <div className="main">

            </div>
        </div>
    );
}

export default TodoList;
