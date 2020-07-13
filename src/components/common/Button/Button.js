import React from "react";
import c from "./Button.module.scss";

const Button = ({onClick, children, className}) => {
    return (
        <div className={className}>
            <button className={c.btn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;