import React from "react";
import c from "./Task.module.scss";
import cn from "classnames"
import {ReactComponent as Star} from "../../../assets/icons/star.svg";


const Task = ({title, description, date, completed, important, onCompletedChange, onImportantChange}) => {
    return (
        <div className={c.container}>
            <Star className={cn(c.star, {[c.starChecked]: important}) }/>
            <div className={c.content}>
                <div className={c.header}>
                    <div className={c.title}>{title}</div>
                    <div>{date}</div>
                </div>
                <div className={c.description}>{description}</div>
            </div>
            <div className={c.options}>
                <input type="checkbox" onChange={onCompletedChange} checked={completed}/>
            </div>
        </div>
    );
};


export default Task;