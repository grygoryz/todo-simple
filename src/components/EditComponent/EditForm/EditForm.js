import React from "react";
import c from "./EditForm.module.scss"
import cn from "classnames"
import {Field, reduxForm} from "redux-form";

const EditForm = ({handleSubmit, onCancel}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field autoFocus="true" component="input" name="title" placeholder="Title" className={cn(c.field, c.title)}/>
            <Field component="textarea" name="description" placeholder="Description" className={cn(c.field, c.description)}/>
            <label>
                Check as important:
                <Field component="input" name="important" placeholder="Important" type="checkbox"/>
            </label>
            <div className={c.controls}>
                <button onClick={onCancel}  type="button" className={c.btn}>Cancel</button>
                <button type="submit" className={cn(c.btn, c.submitBtn)}>Done</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "edit-form"})(EditForm)