import React from "react";
import c from "./Task.module.scss";
import cn from "classnames"
import Checkbox from "../../common/Checkbox/Checkbox";
import EditButton from "../../common/EditButton/EditButton";
import RemoveButton from "../../common/RemoveButton/RemoveButton";
import StarCheckbox from "../../common/Star/StarCheckbox";

// подумать над обертками div. можно ли как-то без них?

const Task = ({title, description, date, completed, important,
                  onCompletedChange, onImportantChange, removeTask, openEditWindow}) => {
    return (
        <div  className={cn(c.container, {[c.container_grayscaled]: completed})}>
            <div className={c.star}><StarCheckbox checked={important} onChange={onImportantChange}/></div>
            <div className={c.content}>
                <div className={c.header}>
                    <div className={c.title}>{title}</div>
                    <div className={c.date}>{date}</div>
                </div>
                <div className={c.description}>{description}</div>
            </div>
            <div className={c.options}>
                <div><Checkbox onChange={onCompletedChange} checked={completed}/></div>
                <div className={c.editBtn}><EditButton onClick={openEditWindow}/></div>
                <div><RemoveButton onClick={removeTask}/></div>
            </div>
        </div>
    );
};

export default Task;