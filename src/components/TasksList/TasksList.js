import React from "react";
import Task from "./Task/Task";
import c from "./TasksList.module.scss"

const TasksList = ({tasks, onCompletedChange}) => {
    return (
        <div className={c.container}>
            {tasks.map(t => <Task key={t.id}
                                  id={t.id}
                                  title={t.title}
                                  description={t.description}
                                  date={t.date}
                                  completed={t.completed}
                                  onCompletedChange={onCompletedChange}
            />)}
        </div>
    );
};

export default TasksList;