import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import TaskList from "./components/TaskList/TaskList";
import axios from 'axios';
// import reportWebVitals from './reportWebVitals';

export default function App() {
    document.title = "To-Do";
    const [taskList, setTaskList] = useState("");
    const url = "https://localhost:7022/api/";

    useEffect(() => {
        getTaskItems();
    }, []);

    const getTaskItems = () => {
        console.log("HI")
        axios.get(`${url}taskitems`)
            .then((response) => {
                const data = response.data;
                setTaskList(data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/To-Do" element={<Navigation />}>
                    <Route exact path="/To-Do" element={taskList && <TaskList taskList={taskList} setTaskList={setTaskList} />} />
                    <Route exact path="/To-Do/completed" element={taskList && <TaskList taskList={taskList} setTaskList={setTaskList} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();