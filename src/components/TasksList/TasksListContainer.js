import {editTask, removeTask, setEditingTask, toggleCompleted, toggleImportant} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import TasksList from "./TasksList";
import React from "react";
import {setEditMode} from "../../redux/app-reducer";
import {getFilteredTasks, getSortedTasks, getSuitableTasks} from "../../selectors/tasksSelectors";
import {compose} from "redux";

const TasksListContainer = ({tasks, toggleCompleted, toggleImportant, removeTask, setEditMode, setEditingTask}) => {

    // это можно вынести в thunk
    const openEditWindow = (task) => {
        setEditingTask(task);
        setEditMode(true);
    };

    return (
        <TasksList tasks={tasks}
                   toggleCompleted={toggleCompleted}
                   toggleImportant={toggleImportant}
                   removeTask={removeTask}
                   openEditWindow={openEditWindow}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: getSuitableTasks(state)
    }
};

const dispatches = {toggleCompleted, toggleImportant, removeTask, editTask, setEditMode, setEditingTask};

export default connect(mapStateToProps, dispatches)(TasksListContainer);