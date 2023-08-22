import React from 'react';

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type TodolistType = {
    title: string
    tasks: TasksType[]
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
                    return <li>
                        <div>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
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