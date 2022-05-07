import React, { useState } from "react";
import styled from "styled-components";
import './Main.css'

// Tasks
let tasks = [
  {description: "Clean apartment", date: "2022-04-27"},
  {description: "Pay rent", date: "2022-05-01"}
]

const Task = ({ task }) => {
   const [data, setData] = useState(task);
   const [dirty, setDirty] = useState(false);
 
   function update(value, fieldName, obj) {
     setData({ ...obj, [fieldName] : value });
     setDirty(true);
   }
 
   function onSave() {
     setDirty(false);
     // make rest call
   }
 
   // UI Structure of Each Task
   return (<React.Fragment>
    <div class="TaskFrame">
    <h3>
    <input class="description" onChange={(event) => update(event.target.value, 'description', data)} value={data.description} /> 
    </h3>
    <p>
    <input type="date" class="date" onChange={(event) => update(event.target.value, 'date', data)} value={data.date} />
    </p>
    </div>
    <br></br>
   </React.Fragment>);
}

// Main
const Main = () => {
  const data = tasks.map(task => <Task task={task} />)
  return (
  <React.Fragment>
  {data}
  </React.Fragment>)
}

export default Main;