import React from 'react';
import {FilterValuesType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type TodolistType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
    changeFilterValue: (value: FilterValuesType) => void
}

const Todolist = (props: TodolistType) => {

    return (
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <input type="text"/>
                <button>add task</button>
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