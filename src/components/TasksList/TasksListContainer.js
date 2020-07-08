import {toggleTask} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import TasksList from "./TasksList";
import React from "react";

const TasksListContainer = ({tasks, toggleTask}) => {
    const onCompletedChange = (id) => {
        toggleTask(id)
    };

    return (
        <TasksList tasks={tasks} onCompletedChange={onCompletedChange}/>
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasksList
    }
};

const dispatches = {toggleTask};

export default connect(mapStateToProps, dispatches)(TasksListContainer);