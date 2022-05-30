import React, { useState } from 'react';
import Task from './Task';
import data from "./test.json";
import './TaskList.css';

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

    function addTask() {
        const temp = [...taskList];
        let nextID = -1
        if (temp.length === 0) {
            nextID = 1
        } else {
            nextID = temp[temp.length - 1].id + 1
        }
        temp.push(
            {
                id: nextID,
                description: "",
                date: "",
            }
        );
        setTaskList(temp);
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
            <div className="bottom_of_page"></div>
            <div className="footer">
                <div className="footer_contents">
                    <button className="add_task" onClick={addTask}>+</button>
                </div>
            </div>
        </div>
    );
}

export default TaskList;