import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {createTask, editTask, setEditingTask} from "../../redux/tasks-reducer";
import React from "react";
import {setEditMode} from "../../redux/app-reducer";

const EditComponentContainer = ({createTask, setEditMode, editingTask, editTask, setEditingTask}) => {

    const onCancel = () => {
        setEditMode(false);
    };

    const applyEdits = (id, payload) => {
        setEditMode(false);
        setEditingTask(null);
        editTask(id, payload)
    };

    return <EditComponent createTask={createTask} onCancel={onCancel} editingTask={editingTask} applyEdits={applyEdits}/>
};

const dispatches = {createTask, editTask, setEditMode, setEditingTask};

export default connect(null, dispatches)(EditComponentContainer)