import React from "react";
import c from "./Panel.module.scss"
import FilterSelect from "./FilterSelect/FilterSelect";
import SortingSelect from "./SortingSelect/SortingSelect";


const Panel = (props) => {
    return (
        <div className={c.container}>
            <FilterSelect/>
            <SortingSelect/>
        </div>
    )
};

export default Panel