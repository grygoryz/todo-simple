import React from "react";
import c from "./SortingSelect.module.scss"
import selectStyle from "../Select.module.scss"


const SortingSelect = (props) => {
    return (
        <div className={c.container}>
           <div className={c.title}>Sorting:</div>
            <select className={selectStyle.select}>
                <option value="SORTING_NEWEST_FIRST">newest first</option>
                <option value="SORTING_OLDEST_FIRST">oldest first</option>
            </select>
        </div>
    )
};

export default SortingSelect