import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";

import Todolist, {TasksType} from "./todolist";



export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: "Terminator2", isDone: true},
        {id: v1(), title: "Pulp fiction", isDone: true},
        {id: v1(), title: "Barbie", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: string) => {
        setTasks(tasks = tasks.filter( t => t.id !== id))
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }
    const changeFilterValue = (value: FilterValuesType) => {
        setFilter(value)
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let changedTask = tasks.find(t => t.id === taskId)
        if (changedTask) {
            changedTask.isDone = isDone;
        }
        let tasksCopy = [...tasks]
        setTasks(tasksCopy)
    }


    let tasksForRender = tasks;
    if (filter === "completed") {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForRender = tasks.filter(t => t.isDone === false)
    }

  return (
    <div className="wrapper">
      <Todolist title={"My film's collection"}
                tasks={tasksForRender}
                removeTask={removeTask}
                addTask={addTask}
                changeFilterValue={changeFilterValue}
                changeTaskStatus = {changeTaskStatus}
                filter={filter}
      />
    </div>
  );
}

export default App;
