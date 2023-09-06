import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    changeFilterValue: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

const Todolist = (props: TodolistType) => {

    let [newTaskTitle, setNewTaskTitle] = useState<string>('')

    let onHandleChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    let onEnterPressTaskAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            addNewTask()
        }
    }

    let addNewTask = () => {
        if (newTaskTitle.length > 0) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    return (
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <input type="text"
                       value={newTaskTitle}
                       onChange={onHandleChangeTaskTitle}
                       onKeyPress={onEnterPressTaskAdd}/>
                <button onClick={addNewTask}>add task</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    return <li key={el.id}>
                        <div>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => props.removeTask(el.id)}>delete</button>
                        </div>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={() => props.changeFilterValue('all')}>all</button>
                <button onClick={() => props.changeFilterValue('active')}>active</button>
                <button onClick={() => props.changeFilterValue('completed')}>completed</button>
            </div>
        </div>
    );
};

export default Todolist;