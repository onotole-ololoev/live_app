import React from 'react';
import './App.css';


import Todolist from "./todolist";



function App() {

    let tasks1 = [
        {id: 1, title: "Terminator2", isDone: true},
        {id: 2, title: "Pulp fiction", isDone: true},
        {id: 3, title: "Barbie", isDone: false}
    ]
    let tasks2 = [
        {id: 1, title: "Real", isDone: true},
        {id: 2, title: "Bayern", isDone: false},
        {id: 3, title: "Slaviya", isDone: true}
    ]

  return (
    <div className="App">
      <Todolist title={"films"} tasks={tasks1}/>
      <Todolist title={"football clubs"} tasks={tasks2}/>
    </div>
  );
}

export default App;
