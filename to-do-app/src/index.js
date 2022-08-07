import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react';
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/To-Do" element={<Navigation />}>
          <Route index element={<TaskList data={data} status={false} />} />
          <Route path="/To-Do/completed" element={<TaskList data={data} status={true} />} />
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