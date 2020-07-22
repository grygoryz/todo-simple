import React from "react";
import c from "./Button.module.scss";

type Props = {
    onClick: (...args: any[]) => void
    className?: string
}

const Button: React.FC<Props> = ({onClick, children, className}) => {
    return (
        <div className={className}>
            <button className={c.btn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;