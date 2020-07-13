import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {applyEdits, closeEditWindow, createTask} from "../../redux/tasks-reducer";
import React from "react";

const EditComponentContainer = ({createTask, editingTask, applyEdits, closeEditWindow}) => {


    return <EditComponent createTask={createTask}
                          closeWindow={closeEditWindow}
                          editingTask={editingTask}
                          applyEdits={applyEdits}/>
};

const mapStateToProps = (state) => {
    return {
        editingTask: state.tasks.editingTask
    }
};

const dispatchProps = {createTask, applyEdits, closeEditWindow};

export default connect(mapStateToProps, dispatchProps)(EditComponentContainer)