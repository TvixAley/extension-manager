import React, {useState} from 'react';
import FilterButton from "../../UI/FilterButton/FilterButton.jsx";
import  classes from './Filter.module.css'

const Filter = ({onChange}) => {
    const [activeFilter, setActiveFilter] = useState("All");

    const handleClick = (filter) => {
        setActiveFilter(filter);
        onChange?.(filter);
    };

    return (
        <div className={classes.filter}>
            <FilterButton
                type="button"
                active={activeFilter === "All"}
                onClick={() => handleClick("All")}
            >
                All
            </FilterButton>

            <FilterButton
                type="button"
                active={activeFilter === "Active"}
                onClick={() => handleClick("Active")}
            >
                Active
            </FilterButton>

            <FilterButton
                type="button"
                active={activeFilter === "Inactive"}
                onClick={() => handleClick("Inactive")}
            >
                Inactive
            </FilterButton>
        </div>
    );
};

export default Filter;