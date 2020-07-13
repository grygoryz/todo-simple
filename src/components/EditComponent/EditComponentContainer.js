import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {applyEdits, createTask} from "../../redux/tasks-reducer";
import React from "react";
import {setEditMode} from "../../redux/app-reducer";

const EditComponentContainer = ({createTask, setEditMode, editingTask, applyEdits}) => {
    return <EditComponent createTask={createTask}
                          closeWindow={() => setEditMode(false)}
                          editingTask={editingTask}
                          applyEdits={applyEdits}/>
};

const mapStateToProps = (state) => {
    return {
        editingTask: state.tasks.editingTask
    }
};

const dispatches = {createTask, applyEdits, setEditMode};

export default connect(mapStateToProps, dispatches)(EditComponentContainer)