import React, {useState} from 'react';
import './App.css';


import Todolist, {TasksType} from "./todolist";



function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: "Terminator2", isDone: true},
        {id: 2, title: "Pulp fiction", isDone: true},
        {id: 3, title: "Barbie", isDone: false}
    ])

    // let tasks = [
    //     {id: 1, title: "Terminator2", isDone: true},
    //     {id: 2, title: "Pulp fiction", isDone: true},
    //     {id: 3, title: "Barbie", isDone: false}
    // ]
    // let tasks2 = [
    //     {id: 1, title: "Real", isDone: true},
    //     {id: 2, title: "Bayern", isDone: false},
    //     {id: 3, title: "Slaviya", isDone: true}
    // ]

    const removeTask = (id: number) => {
        setTasks(tasks = tasks.filter( t => t.id != id))
    }

  return (
    <div className="App">
      <Todolist title={"films"} tasks={tasks} removeTask={removeTask}/>
      {/*<Todolist title={"football clubs"} tasks={tasks2}/>*/}
    </div>
  );
}

export default App;
