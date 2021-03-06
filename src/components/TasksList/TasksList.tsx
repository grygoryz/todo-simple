import React from "react";
import Task from "./Task/Task";
import c from "./TasksList.module.scss"
import {useTransition, animated} from "react-spring";
import {TasksListType, TaskType} from "../../types/types";

type Props = {
    tasks: TasksListType
    toggleCompleted: (id: number) => void
    toggleImportant: (id: number) => void
    removeTask: (id: number) => void
    openEditWindow: (task: TaskType) => void
}

const TasksList: React.FC<Props> = ({tasks, toggleCompleted, toggleImportant, removeTask, openEditWindow}) => {

    const transitions = useTransition(tasks, task => task.id, {
        from: {opacity: 0, transform: "scale(1.2)"},
        enter: {opacity: 1, transform: "scale(1)"},
        leave: {opacity: 0, transform: "scale(0.8)"},
        config: {
            duration: 200,
        }
    });

    return (
        <div>
            {transitions.map(({item, props, key}) => (
                <animated.div style={props} key={key} className={c.taskContainer}>
                    <Task
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        completed={item.completed}
                        important={item.important}
                        onCompletedChange={() => toggleCompleted(item.id)}
                        onImportantChange={() => toggleImportant(item.id)}
                        removeTask={() => removeTask(item.id)}
                        openEditWindow={() => openEditWindow(item)}/>
                </animated.div>))}
        </div>
    );
};

export default TasksList;