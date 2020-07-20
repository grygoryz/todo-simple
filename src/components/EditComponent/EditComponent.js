import React from "react";
import c from "./EditComponent.module.scss"
import EditForm from "./EditForm/EditForm";

const EditComponent = ({onSubmit, closeWindow, editingTask}) => {

    const onClick = (e) => {
        if (e.target.className === c.container) closeWindow();
    };

    return (
        <div onClick={onClick} className={c.container}>
            <div className={c.window}>
                <h2 className={c.title}>{editingTask? "Edit Task:" : "Add Task:"}</h2>
                <EditForm initialValues={editingTask} onSubmit={onSubmit} onCancel={closeWindow}/>
            </div>
        </div>
    )
};

export default EditComponent