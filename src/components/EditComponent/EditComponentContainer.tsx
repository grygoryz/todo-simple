import {connect} from "react-redux";
import EditComponent from "./EditComponent";
import {applyEdits, closeEditWindow, createTask} from "../../redux/tasks-reducer";
import React from "react";
import {TaskType} from "../../types/types";
import {EditFormValues} from "./EditForm/EditForm";
import {AppState} from "../../redux/redux-store";

const EditComponentContainer: React.FC<Props> = ({createTask, editingTask, applyEdits, closeEditWindow}) => {

    const onSubmit = (formData: EditFormValues) => {
        if (!editingTask){
            createTask(formData)
        } else {
            applyEdits(editingTask.id, formData)
        }
    };

    return <EditComponent closeWindow={closeEditWindow} editingTask={editingTask} onSubmit={onSubmit}/>
};

const mapStateToProps = (state: AppState) => {
    return {
        editingTask: state.tasks.editingTask
    }
};

const dispatchProps = {createTask, applyEdits, closeEditWindow};

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateToProps, dispatchProps)(EditComponentContainer)

type MapStateProps = {
    editingTask: TaskType | null
}

type MapDispatchProps = {
    createTask: (formData: EditFormValues) => void
    applyEdits: (id: number, formData: EditFormValues) => void
    closeEditWindow: () => void
}

type Props = MapStateProps & MapDispatchProps

