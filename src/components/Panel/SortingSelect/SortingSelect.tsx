import React from "react";
import c from "../Select.module.scss"
import {SortingMethodsType, SortingMethods} from "../../../redux/showing-reducer";
import Select from "../../common/Select/Select";

type Props = {
    value: SortingMethodsType
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortingSelect: React.FC<Props> = ({value, onChange}) => {
    return (
        <div className={c.container}>
           <div className={c.title}>Sorting:</div>
            <Select value={value} onChange={onChange}>
                <option value={SortingMethods.NEWEST_FIRST}>newest first</option>
                <option value={SortingMethods.OLDEST_FIRST}>oldest first</option>
            </Select>
        </div>
    )
};

export default SortingSelect