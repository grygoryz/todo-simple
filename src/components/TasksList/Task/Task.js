import React from "react";
import c from "./Task.module.scss";


const Task = ({id, title, description, date, completed, onCompletedChange}) => {


    return (
        <div className={c.container}>
            <div className={c.content}>
                <div className={c.header}>
                    <div className={c.title}>{title}</div>
                    <div>{date}</div>
                </div>
                <div className={c.description}>{description}</div>

            </div>
            <div className={c.options}>
                <input type="checkbox" onChange={() => onCompletedChange(id)} checked={completed}/>
            </div>
        </div>
    );
};


export default Task;