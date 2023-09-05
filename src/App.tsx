import React, {useState} from 'react';
import './App.css';


import Todolist, {TasksType} from "./todolist";


export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: "Terminator2", isDone: true},
        {id: 2, title: "Pulp fiction", isDone: true},
        {id: 3, title: "Barbie", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: number) => {
        setTasks(tasks = tasks.filter( t => t.id != id))
    }
    const changeFilterValue = (value: FilterValuesType) => {
        setFilter(value)
    }

    let tasksForRender = tasks;
    if (filter === "completed") {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForRender = tasks.filter(t => t.isDone === false)
    }

  return (
    <div className="App">
      <Todolist title={"films"} tasks={tasksForRender} removeTask={removeTask} changeFilterValue={changeFilterValue}/>
      {/*<Todolist title={"football clubs"} tasks={tasks2}/>*/}
    </div>
  );
}

export default App;
