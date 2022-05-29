import React, { useState } from "react";
import './Task.css';

function Task(props) {
    const [data, setData] = useState(props.task);

    function update(value, fieldName, obj) {
        setData({ ...obj, [fieldName]: value });
    }

    return (
        <div className="TaskFrame">
            <input className="description" onChange={(event) => update(event.target.value, 'description', data)} value={data.description} />
            <input type="date" className="date" onChange={(event) => update(event.target.value, 'date', data)} value={data.date} />
            <button className="deleteButton" onClick={(event) => props.onClick(event.target.value)}>Delete</button>
        </div>
    )
}

export default Task;