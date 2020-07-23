import React from "react";
import c from "./Select.module.scss"

type Props = {
    value: string
    onChange: (...args: any[]) => void
}

const Select: React.FC<Props> = ({value, onChange, children}) => {
    return <select value={value} onChange={onChange} className={c.select}>
        {children}
    </select>
};

export default Select