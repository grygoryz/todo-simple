import React from "react";
import c from "./Checkbox.module.scss"

const Checkbox = ({onChange, checked}) => {
    return (
        <label className={c.check}>
            <input onChange={onChange} checked={checked} type="checkbox"/>
            <div className={c.box}/>
        </label>
    );
};

export default Checkbox;