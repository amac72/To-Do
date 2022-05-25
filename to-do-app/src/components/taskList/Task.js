import React, { useState } from "react";
import './Task.css';

const Task = ({ task }) => {
    const [data, setData] = useState(task);

    function update(value, fieldName, obj) {
        setData({ ...obj, [fieldName]: value });
    }

    return (
        <div class="TaskFrame">
            <input class="description" onChange={(event) => update(event.target.value, 'description', data)} value={data.description} />
            <p></p>
            <input type="date" class="date" onChange={(event) => update(event.target.value, 'date', data)} value={data.date} />
        </div>
    )
}

export default Task;