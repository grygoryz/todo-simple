import React from "react";
import c from "./SortingSelect.module.scss"
import selectStyle from "../Select.module.scss"
import {SortingMethods} from "../../../redux/showing-reducer";

const SortingSelect = ({value, onChange}) => {
    return (
        <div className={c.container}>
           <div className={c.title}>Sorting:</div>
            <select value={value} onChange={onChange} className={selectStyle.select}>
                <option value={SortingMethods.NEWEST_FIRST}>newest first</option>
                <option value={SortingMethods.OLDEST_FIRST}>oldest first</option>
            </select>
        </div>
    )
};

export default SortingSelect