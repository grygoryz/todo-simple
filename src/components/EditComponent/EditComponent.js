import React from "react";
import c from "./EditComponent.module.scss"
import EditForm from "./EditForm/EditForm";


const EditComponent = ({createTask, onCancel}) => {

    const onSubmit = (formData) => {
        createTask(formData)
    };

    return (
        <div className={c.container}>
            <div className={c.window}>
                <h2 className={c.title}>Add Task:</h2>
                <EditForm onSubmit={onSubmit} onCancel={onCancel}/>
            </div>
        </div>
    )
};

export default EditComponent