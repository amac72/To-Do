import React, { useState } from "react";
import './Task.css';

const Task = ({ task }) => {
    const [data, setData] = useState(task);

    function update(value, fieldName, obj) {
        setData({ ...obj, [fieldName]: value });
    }

    return (
        <div className="TaskFrame">
            <input className="description" onChange={(event) => update(event.target.value, 'description', data)} value={data.description} />
            <input type="date" className="date" onChange={(event) => update(event.target.value, 'date', data)} value={data.date} />
            <button className="deleteButton">Delete</button>
        </div>
    )
}

export default Task;