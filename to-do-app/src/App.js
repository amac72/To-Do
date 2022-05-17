import './App.css';
import Header from './header/Header.js';
import List from './list/List.js';

function App() {
  document.title = "To-Do"
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;