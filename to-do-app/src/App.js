import './App.css';
import Header from './components/header/Header.js';
import TaskList from './components/taskList/TaskList.js';

function App() {
  document.title = "To-Do";
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;