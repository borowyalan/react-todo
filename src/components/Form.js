import React, { useState } from 'react'

export default function Form(props) {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return
        setValue('');
        props.addItem(value);
    }

    return (
        <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter name of the task here 🖊️"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    <button type="submit"><span role="img" aria-label="OK hand">👌</span></button>
        </form>
    )
}
