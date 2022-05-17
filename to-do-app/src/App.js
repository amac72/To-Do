import './App.css';
import Header from './header/Header.js';
import Main from './Main.js';

function App() {
  document.title = "To-Do"
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;