import React from "react";
import c from "./EditButton.module.scss";
import {ReactComponent as EditBtnIcon} from "../../../assets/icons/edit.svg"

const EditButton = ({onClick}) => {
    return (
        <button className={c.btn} onClick={onClick}>
            <EditBtnIcon/>
        </button>
    );
};

export default EditButton;