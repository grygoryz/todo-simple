import React from "react";
import c from "./RemoveButton.module.scss";
import {ReactComponent as RemoveBtnIcon} from "../../assets/icons/remove.svg"

const RemoveButton = ({onClick}) => {
    return (
        <button className={c.btn} onClick={onClick}>
            <RemoveBtnIcon width="35px" height="35px"/>
        </button>
    );
};

export default RemoveButton;