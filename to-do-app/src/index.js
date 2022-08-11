import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import data from "./test.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import TaskList from "./components/TaskList/TaskList";
// import reportWebVitals from './reportWebVitals';

export default function App() {
  document.title = "To-Do";
  const [taskList, setTaskList] = useState(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/To-Do" element={<Navigation />}>
          <Route exact path="/To-Do" element={<TaskList taskList={taskList} setTaskList={setTaskList} />} />
          <Route exact path="/To-Do/completed" element={<TaskList taskList={taskList} setTaskList={setTaskList} />} />
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