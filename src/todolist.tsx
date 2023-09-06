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
    let onChangeFilterToAll = () => props.changeFilterValue('all')
    let onChangeFilterToActive = () => props.changeFilterValue('active')
    let onChangeFilterToCompleted = () => props.changeFilterValue('completed')

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

                    let removeTaskHandle = () => {
                        props.removeTask(el.id)
                    }

                    return <li key={el.id}>
                        <div>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={removeTaskHandle}>delete</button>
                        </div>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={onChangeFilterToAll}>all</button>
                <button onClick={onChangeFilterToActive}>active</button>
                <button onClick={onChangeFilterToCompleted}>completed</button>
            </div>
        </div>
    );
};

export default Todolist;