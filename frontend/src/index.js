import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect, useRef } from 'react';
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
    let status = useRef(false);

    useEffect(() => {
        const getTaskItems = () => {
            axios.get(`${url}taskitems`)
                .then((response) => {
                    const data = response.data;
                    setTaskList(data);
                    status.current = true;
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getTaskItems();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/To-Do" element={<Navigation status={status.current} url={url} />}>
                    <Route exact path="/To-Do" element={(taskList && <TaskList taskList={taskList} setTaskList={setTaskList} url={url} />) || <p>Loading...</p>} />
                    <Route exact path="/To-Do/completed" element={(taskList && <TaskList taskList={taskList} setTaskList={setTaskList} url={url} />) || <p>Loading...</p>} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();