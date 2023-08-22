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
                <li>
                    <div>
                        <input type="checkbox" checked={props.tasks[0].isDone}/>
                        <span>{props.tasks[0].title}</span>
                    </div>
                </li>
                <li>
                    <div>
                        <input type="checkbox" checked={props.tasks[1].isDone}/>
                        <span>{props.tasks[1].title}</span>
                    </div>
                </li>
                <li>
                    <div>
                        <input type="checkbox" checked={props.tasks[2].isDone}/>
                        <span>{props.tasks[2].title}</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Todolist;