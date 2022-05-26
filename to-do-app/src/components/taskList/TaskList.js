import React from 'react';
import Task from './Task';

const TaskList = ({ taskList }) => {
    return (
        <div>
            {taskList.map(task => {
                return (
                    <div key={task.id}>
                        <Task task={task} />
                        <br></br>
                    </div>
                )
            })}
        </div>
    );
}

export default TaskList;