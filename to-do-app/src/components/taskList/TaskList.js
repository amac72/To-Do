import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

function TaskList({ data, status }) {
    const [taskList, setTaskList] = useState(data);
    let nextId = taskList[taskList.length - 1].id + 1

    function updateTask(value, fieldName, id) {
        const temp = [...taskList].map(task => {
            if (task.id === id) {
                return { ...task, [fieldName]: value }
            } else {
                return { ...task }
            }
        })
        setTaskList(temp)
    }

    function deleteTask(id) {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTaskList(taskList.filter(item => item.id !== id));
        }
    }

    function addTask() {
        const temp = [...taskList];
        temp.push(
            {
                id: nextId,
                description: "",
                date: "",
                completed: false
            }
        );
        nextId += 1
        setTaskList(temp);
    }

    function reorderTasks() {
        const temp = [...taskList]
        temp.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        setTaskList(temp);
    }

    return (
        <div>
            {taskList.filter(task => task.completed === status).map(task => {
                return (
                    <div key={task.id} data-testid={`task-${task.id}`}>
                        <Task task={task} updateTask={updateTask} deleteTask={() => deleteTask(task.id)} />
                        <br></br>
                    </div>
                )
            })}
            <div className="bottom_of_page">
                <button id="reorder_tasks" onClick={reorderTasks}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg></button>
                <button id="add_task" onClick={addTask}>+</button>
            </div>
        </div>
    );
}

export default TaskList;