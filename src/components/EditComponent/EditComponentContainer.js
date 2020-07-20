import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {applyEdits, closeEditWindow, createTask} from "../../redux/tasks-reducer";
import React from "react";

const EditComponentContainer = ({createTask, editingTask, applyEdits, closeEditWindow}) => {

    const onSubmit = (formData) => {
        if (!editingTask){
            createTask(formData)
        } else {
            applyEdits(editingTask.id, formData)
        }
    };

    return <EditComponent closeWindow={closeEditWindow} editingTask={editingTask} onSubmit={onSubmit}/>
};

const mapStateToProps = (state) => {
    return {
        editingTask: state.tasks.editingTask
    }
};

const dispatchProps = {createTask, applyEdits, closeEditWindow};

export default connect(mapStateToProps, dispatchProps)(EditComponentContainer)