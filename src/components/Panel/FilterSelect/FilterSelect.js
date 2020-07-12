import React from "react";
import c from "./FilterSelect.module.scss"
import selectStyle from "../Select.module.scss"
import {VisibilityFilters} from "../../../redux/showing-reducer";

const FilterSelect = ({value, onChange}) => {
    return (
        <div className={c.container}>
            <div className={c.title}>Show: </div>
            <select value={value} onChange={onChange} className={selectStyle.select}>
                <option value={VisibilityFilters.SHOW_ALL}>all</option>
                <option value={VisibilityFilters.SHOW_IMPORTANT}>important only</option>
                <option value={VisibilityFilters.SHOW_ACTIVE}>active only</option>
                <option value={VisibilityFilters.SHOW_COMPLETED}>completed only</option>
            </select>
        </div>
    )
};

export default FilterSelect