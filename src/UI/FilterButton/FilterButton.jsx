import React from 'react';
import classes from './FilterButton.module.css'

const FilterButton = ({active, children, ...props}) => {
    return (
        <button className={`${classes.filterButton} ${active ? classes.active : ""}`} {...props}>
            {children}
        </button>
    );
};

export default FilterButton;