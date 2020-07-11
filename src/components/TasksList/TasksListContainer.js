import {removeTask, toggleImportant, toggleTask} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import TasksList from "./TasksList";
import React from "react";

const TasksListContainer = (props) => {
    return (
        <TasksList {...props}/>
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasksList
    }
};

const dispatches = {toggleTask, toggleImportant, removeTask};

export default connect(mapStateToProps, dispatches)(TasksListContainer);