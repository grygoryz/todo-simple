import React from "react";
import c from "./Select.module.scss"

const Select = ({value, onChange, children}) => {
    return (
            <select value={value} onChange={onChange} className={c.select}>
                {children}
            </select>
    )
};

export default Select