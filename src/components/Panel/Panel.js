import React from "react";
import c from "./Panel.module.scss"
import FilterSelect from "./FilterSelect/FilterSelect";
import SortingSelect from "./SortingSelect/SortingSelect";


const Panel = ({visibilityFilter, sortingMethod, setVisibilityFilter, setSortingMethod}) => {
    return (
        <div className={c.container}>
            <FilterSelect value={visibilityFilter} onChange={(e) => setVisibilityFilter(e.target.value)}/>
            <SortingSelect value={sortingMethod} onChange={(e) => setSortingMethod(e.target.value)}/>
        </div>
    )
};

export default Panel