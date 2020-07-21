import React from "react";
import c from "./Checkbox.module.scss"

type Props = {
    onChange: (...args: any[]) => void
    checked: boolean
}

const Checkbox: React.FC<Props> = ({onChange, checked}) => {
    return (
        <label className={c.check}>
            <input  onChange={onChange} checked={checked} type="checkbox"/>
            <div className={c.box}/>
        </label>
    );
};

export default Checkbox;