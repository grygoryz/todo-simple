import React from "react";
import c from "./Task.module.scss";
import cn from "classnames"
import Checkbox from "../../common/Checkbox/Checkbox";
import {ReactComponent as RemoveBtnIcon} from "../../../assets/icons/remove.svg"
import {ReactComponent as EditBtnIcon} from "../../../assets/icons/edit.svg"
import StarCheckbox from "../../common/Star/StarCheckbox";
import Button from "../../common/Button/Button";

type Props = {
    onCompletedChange: () => void
    onImportantChange: () => void
    removeTask: () => void
    openEditWindow: () => void
    completed: boolean
    important: boolean
    title: string
    date: string
    description: string
}

const Task: React.FC<Props> = ({onCompletedChange, onImportantChange, removeTask, openEditWindow, ...task}) => {

    return (
        <div  className={cn(c.container, {[c.container_grayscaled]: task.completed})}>
            <div className={c.star}><StarCheckbox checked={task.important} onChange={onImportantChange}/></div>
            <div className={c.content}>
                <div className={c.header}>
                    <div className={c.title}>{task.title}</div>
                    <div className={c.date}>{task.date}</div>
                </div>
                <div className={c.description}>{task.description}</div>
            </div>
            <div className={c.options}>
                <Checkbox onChange={onCompletedChange} checked={task.completed}/>
                <Button className={c.editBtn} onClick={openEditWindow}><EditBtnIcon/></Button>
                <Button onClick={removeTask}><RemoveBtnIcon/></Button>
            </div>
        </div>
    );
};

export default Task;