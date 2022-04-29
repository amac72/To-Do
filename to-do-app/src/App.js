import './App.css';

 import Main from './Main.js';

 function App() {
   document.title = "To-Do"
   return (
     <div className="App">
       <h1>To-Do</h1>
       <h2>View, add, change, and delete items from your to-do list.</h2>
       <a href="https://github.com/amac72/To-Do">Click Me to Visit the Repo!</a>
       <hr></hr>
       <br></br>
       <Main />
     </div>
   );
 }

 export default App;