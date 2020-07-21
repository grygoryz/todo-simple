import React from "react";
import c from "./StarCheckbox.module.scss";
import {ReactComponent as Star} from "../../../assets/icons/star.svg";

type Props = {
    checked: boolean
    onChange: (...args: any[]) => void
}
const StarCheckbox: React.FC<Props> = ({checked, onChange}) => {
    return (
        <label className={c.check}>
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <Star className={c.star}/>
        </label>
    );
};

export default StarCheckbox;