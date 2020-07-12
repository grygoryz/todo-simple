import React from "react";
import c from "./FilterSelect.module.scss"
import selectStyle from "../Select.module.scss"


const FilterSelect = (props) => {
    return (
        <div className={c.container}>
            <div className={c.title}>Show: </div>
            <select className={selectStyle.select}>
                <option value="SHOW_ALL">all</option>
                <option value="SHOW_IMPORTANT">important only</option>
                <option value="SHOW_ACTIVE">active only</option>
                <option value="SHOW_COMPLETED">completed only</option>
            </select>
        </div>
    )
};

export default FilterSelect