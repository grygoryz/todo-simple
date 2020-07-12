import React from "react";
import c from "./EditComponent.module.scss"
import EditForm from "./EditForm/EditForm";


const EditComponent = ({createTask, applyEdits, onCancel, editingTask}) => {

    const onSubmit = (formData) => {
        if (!editingTask){
            createTask(formData)
        } else {
            applyEdits(editingTask.id, formData)
        }
    };

    return (
        <div className={c.container}>
            <div className={c.window}>
                <h2 className={c.title}>{editingTask? "Edit Task:" : "Add Task:"}</h2>
                <EditForm initialValues={editingTask} onSubmit={onSubmit} onCancel={onCancel}/>
            </div>
        </div>
    )
};

export default EditComponent