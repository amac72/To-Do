import './App.css';
import data from "./components/taskList/test.json";
import Header from './components/header/Header.js';
import TaskList from './components/taskList/TaskList.js';
import React, { useState } from 'react';

function App() {
  document.title = "To-Do";
  const [taskList, setTaskList] = useState(data);

  return (
    <div className="App">
      <Header />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;