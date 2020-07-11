import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {createTask} from "../../redux/tasks-reducer";
import React from "react";
import {setEditMode} from "../../redux/app-reducer";

const EditComponentContainer = ({createTask, setEditMode}) => {

    const onCancel = () => {
        setEditMode(false);
    };

    return <EditComponent createTask={createTask} onCancel={onCancel}/>
};

const dispatches = {createTask, setEditMode};

export default connect(null, dispatches)(EditComponentContainer)