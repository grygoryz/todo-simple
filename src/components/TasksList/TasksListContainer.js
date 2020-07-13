import {
    editTask,
    openEditWindow,
    removeTask,
    toggleCompleted,
    toggleImportant
} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import TasksList from "./TasksList";
import React from "react";
import {getSuitableTasks} from "../../selectors/tasksSelectors";

const TasksListContainer = ({tasks, toggleCompleted, toggleImportant, removeTask, openEditWindow}) => {
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

const dispatchProps = {toggleCompleted, toggleImportant, removeTask, editTask, openEditWindow};

export default connect(mapStateToProps, dispatchProps)(TasksListContainer);