import React, { useState } from 'react';
import Task from './Task';
import Footer from './Footer';


function TaskList({ data, status }) {
    const [taskList, setTaskList] = useState(data);
    const [nextId, setNextId] = useState(taskList[taskList.length - 1].id + 1)

    function updateTask(value, fieldName, id) {
        const temp = [...taskList].map(task => {
            if (task.id === id) {
                return { ...task, [fieldName]: value }
            } else {
                return { ...task }
            }
        })
        setTaskList(temp)
        console.log(temp)
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
        setNextId(nextId + 1)
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
            <Footer reorderTasks={() => reorderTasks()} addTask={() => addTask()} />
        </div>
    );
}

export default TaskList;