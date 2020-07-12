import React from "react";
import Task from "./Task/Task";
import c from "./TasksList.module.scss"

const TasksList = ({tasks, toggleCompleted, toggleImportant, removeTask}) => {
    return (
        <div className={c.container}>
            {tasks.map(t => <Task key={t.id}
                                  id={t.id}
                                  title={t.title}
                                  description={t.description}
                                  date={t.date}
                                  completed={t.completed}
                                  important={t.important}
                                  onCompletedChange={() => toggleCompleted(t.id)}
                                  onImportantChange={() => toggleImportant(t.id)}
                                  removeTask={() => removeTask(t.id)}
            />)}
        </div>
    );
};

export default TasksList;