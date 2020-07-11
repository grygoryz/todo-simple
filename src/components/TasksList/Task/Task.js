import React from "react";
import c from "./Task.module.scss";
import cn from "classnames"
import {ReactComponent as Star} from "../../../assets/icons/star.svg";
import Checkbox from "../../../common/Checkbox/Checkbox";
import EditButton from "../../../common/EditButton/EditButton";
import RemoveButton from "../../../common/RemoveButton/RemoveButton";

// снизить размеры до 35x у кнопок

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
                <Checkbox onChange={onCompletedChange} checked={completed}/>
                <EditButton/>
                <RemoveButton/>
            </div>
        </div>
    );
};

export default Task;