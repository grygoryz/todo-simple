import {TasksActions, openEditWindow} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import TasksList from "./TasksList";
import React from "react";
import {getSuitableTasks} from "../../selectors/tasksSelectors";
import {TasksListType, TaskType} from "../../types/types";
import {AppState} from "../../redux/redux-store";

const TasksListContainer: React.FC<Props> = ({tasks, toggleCompleted, toggleImportant, removeTask, openEditWindow}) => {
    return (
        <TasksList tasks={tasks}
                   toggleCompleted={toggleCompleted}
                   toggleImportant={toggleImportant}
                   removeTask={removeTask}
                   openEditWindow={openEditWindow}
        />
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        tasks: getSuitableTasks(state)
    }
};

const dispatchProps = {
    toggleCompleted: TasksActions.toggleCompleted,
    toggleImportant: TasksActions.toggleImportant,
    removeTask: TasksActions.removeTask,
    editTask: TasksActions.editTask,
    openEditWindow
};

export default connect<MapStateType, MapDispatchType, {}, AppState>(mapStateToProps, dispatchProps)(TasksListContainer);

type MapStateType = {
    tasks: TasksListType
}

type MapDispatchType = {
    toggleCompleted: (id: number) => void
    toggleImportant: (id: number) => void
    removeTask: (id: number) => void
    editTask: (id: number, task: TaskType) => void
    openEditWindow: (task: TaskType) => void
}

type Props = MapStateType & MapDispatchType