import React from 'react';

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type TodolistType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
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
                <button>all</button>
                <button>active</button>
                <button>completed</button>
            </div>
        </div>
    );
};

export default Todolist;