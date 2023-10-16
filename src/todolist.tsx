import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

const Todolist = (props: TodolistType) => {

    let [newTaskTitle, setNewTaskTitle] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    let onHandleChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    let onEnterPressTaskAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.ctrlKey && e.charCode === 13) {
            addNewTask()
        }
    }

    let addNewTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle('')

        } else {
            setError('Title is required')
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
                       onKeyPress={onEnterPressTaskAdd}
                       className={error ? 'error' : ''}/>
                <button onClick={addNewTask}>add task</button>
                {error ? <div className={'error-message'}>{error}</div> : null}
            </div>
            <ul>
                {props.tasks.map(el => {

                    let removeTaskHandle = () => {
                        props.removeTask(el.id)
                    }
                    let onHandleChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(el.id, e.currentTarget.checked)
                    }

                    return <li key={el.id}>
                        <div>
                            <input type="checkbox"
                                   checked={el.isDone}
                                   onChange={onHandleChangeTaskStatus}
                            />
                            <span>{el.title}</span>
                            <button onClick={removeTaskHandle}>delete</button>
                        </div>
                    </li>
                })}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onChangeFilterToAll}>all</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onChangeFilterToActive}>active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onChangeFilterToCompleted}>completed</button>
            </div>
        </div>
    );
};

export default Todolist;