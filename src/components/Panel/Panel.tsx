import React from "react";
import c from "./Panel.module.scss"
import FilterSelect from "./FilterSelect/FilterSelect";
import SortingSelect from "./SortingSelect/SortingSelect";
import {SortingMethodsType, VisibilityFiltersType} from "../../redux/showing-reducer";

type Props = {
    visibilityFilter: VisibilityFiltersType
    sortingMethod: SortingMethodsType
    setVisibilityFilter: (filter: VisibilityFiltersType) => void
    setSortingMethod: (method: SortingMethodsType) => void
}

const Panel: React.FC<Props> = ({visibilityFilter, sortingMethod, setVisibilityFilter, setSortingMethod}) => {
    return (
        <div className={c.container}>
            <FilterSelect value={visibilityFilter}
                          onChange={(e) => setVisibilityFilter(e.target.value as VisibilityFiltersType)}/>
            <SortingSelect value={sortingMethod}
                           onChange={(e) => setSortingMethod(e.target.value as SortingMethodsType)}/>
        </div>
    )
};

export default Panel