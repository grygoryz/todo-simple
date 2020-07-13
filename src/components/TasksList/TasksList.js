import React from "react";
import Task from "./Task/Task";
import c from "./TasksList.module.scss"
import fadeTransition from "../../transitions/fade.module.scss"
import {CSSTransitionGroup} from "react-transition-group"

const TasksList = ({tasks, toggleCompleted, toggleImportant, removeTask, openEditWindow}) => {
    return (
        <div>
            <CSSTransitionGroup transitionName={fadeTransition} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
            {tasks.map(t => <div className={c.taskContainer}><Task key={t.id}
                                  id={t.id}
                                  title={t.title}
                                  description={t.description}
                                  date={t.date}
                                  completed={t.completed}
                                  important={t.important}
                                  onCompletedChange={() => toggleCompleted(t.id)}
                                  onImportantChange={() => toggleImportant(t.id)}
                                  removeTask={() => removeTask(t.id)}
                                  openEditWindow={() => openEditWindow(t)}
            /></div>)}
            </CSSTransitionGroup>
        </div>
    );
};

export default TasksList;