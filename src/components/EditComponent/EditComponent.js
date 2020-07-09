import React from "react";
import c from "./EditComponent.module.scss"
import EditForm from "./EditForm/EditForm";

// можно вытащить кнопку отмены из формы сюда

const EditComponent = ({createTask, closeWindow}) => {

    const onSubmit = (formData) => {
        createTask(formData)
    };

    return (
        <div className={c.container}>
            <div className={c.window}>
                <h2 className={c.title}>Add Task:</h2>
                <EditForm onSubmit={onSubmit} closeWindow={closeWindow}/>
            </div>
        </div>
    )
};

export default EditComponent