import React, { useState } from 'react';
import Task from './Task';
import data from "./test.json";

function TaskList() {
    const [taskList, setTaskList] = useState(data);

    function deleteTask(id) {
        let i = 0
        if (window.confirm("Are you sure you want to delete this task?")) {
            for (i = 0; i < taskList.length; i++) {
                if (taskList[i].id === id) {
                    break;
                }
            }
            const temp = [...taskList];
            temp.splice(i, 1);
            setTaskList(temp);

            // setTaskList(taskList.filter(item => item.id !== id));
        }
    }

    return (
        <div>
            {taskList.map(task => {
                return (
                    <div key={task.id}>
                        <Task task={task} onClick={() => deleteTask(task.id)} />
                        <br></br>
                    </div>
                )
            })}
        </div>
    );
}

export default TaskList;