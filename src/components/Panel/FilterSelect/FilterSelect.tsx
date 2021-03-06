import React from "react";
import c from "../Select.module.scss"
import {VisibilityFiltersType, VisibilityFilters} from "../../../redux/showing-reducer";
import Select from "../../common/Select/Select";

type Props = {
    value: VisibilityFiltersType
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const FilterSelect: React.FC<Props> = ({value, onChange}) => {
    return (
        <div className={c.container}>
            <div className={c.title}>Show: </div>
            <Select value={value} onChange={onChange}>
                <option value={VisibilityFilters.SHOW_ALL}>all</option>
                <option value={VisibilityFilters.SHOW_IMPORTANT}>important only</option>
                <option value={VisibilityFilters.SHOW_ACTIVE}>active only</option>
                <option value={VisibilityFilters.SHOW_COMPLETED}>completed only</option>
            </Select>
        </div>
    )
};

export default FilterSelect