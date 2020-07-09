import React from "react";
import c from "./EditForm.module.scss"
import cn from "classnames"
import {Field, reduxForm} from "redux-form";

const EditForm = ({handleSubmit, closeWindow}) => {
    return (
        <form className={c.form} onSubmit={handleSubmit}>
            <Field component="input" name="title" placeholder="Title" className={cn(c.field, c.title)}/>
            <Field component="textarea" name="description" placeholder="Description" className={cn(c.field,c.description)}/>
            <div>
                Check as important:
                <Field component="input" name="important" placeholder="Important" type="checkbox" className={cn(c.checkbox)}/>
            </div>
            <div className={c.controls}>
                <button onClick={closeWindow}  type="button" className={cn(c.btn, c.cancelBtn)}>Cancel</button>
                <button type="submit" className={cn(c.btn, c.submitBtn)}>Add</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "edit-form"})(EditForm)