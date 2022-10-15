import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Task from './Task';
import Footer from './Footer';
import axios from 'axios';

function TaskList(props) {
    const { taskList, setTaskList, url } = props;
    const [nextId, setNextId] = useState(taskList[taskList.length - 1].id + 1)

    function getStatus(location) {
        const pathname = location.pathname;
        let status = ""
        if (pathname === "/To-Do/completed") {
            status = true
        } else {
            status = false
        }
        return status
    }

    const status = getStatus(useLocation())

    function updateTask(value, fieldName, id) {
        const temp = [...taskList].map(task => {
            if (task.id === id) {
                axios.put(`${url}taskitems/${id}`, {
                    id: task.id,
                    description: fieldName === "description" ? value : task.description,
                    date: fieldName === "date" ? value : task.date,
                    completed: fieldName === "completed" ? value : task.completed,
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(error => console.error(`Error: ${error}`));
                return { ...task, [fieldName]: value }
            } else {
                return { ...task }
            }
        })
        setTaskList(temp)
    }

    function deleteTask(id) {
        if (window.confirm("Are you sure you want to delete this task?")) {
            axios.delete(`${url}taskitems/${id}`)
                .then((response) => {
                    console.log(response.data);
                })
                .catch(error => console.error(`Error: ${error}`));
            setTaskList(taskList.filter(item => item.id !== id));
        }
    }

    function addTask() {
        axios.post(`${url}taskitems`, {
            id: nextId,
            description: null,
            date: null,
            completed: false
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));

        const temp = [...taskList];
        temp.push(
            {
                id: nextId,
                description: "",
                date: null,
                completed: false
            }
        );
        setNextId(nextId + 1)
        setTaskList(temp);
    }

    function reorderTasks() {
        const temp = [...taskList]
        temp.sort((a, b) => {
            const dateA = new Date(a.date).getTime() || 0
            const dateB = new Date(b.date).getTime() || 0
            if (dateA === 0) {
                return 1
            } else if (dateB === 0) {
                return -1
            } else {
                return dateA - dateB
            }
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
            <Footer reorderTasks={() => reorderTasks()} addTask={() => addTask()} status={status} />
        </div>
    );
}

export default TaskList;