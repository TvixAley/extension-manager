import React, {useState} from 'react';
import Filter from "../Filter/Filter.jsx";
import ExtensionsList from "../ExtensionsList/ExtensionsList.jsx";
import classes from './MainContainer.module.css'

const MainContainer = ({extensions, setExtensions}) => {

    const [activeFilter, setActiveFilter] = useState("All");

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredExtensions = extensions.filter((ext) => {
        switch (activeFilter) {
            case "Active":
                return ext.isActive;
            case "Inactive":
                return !ext.isActive;
            case "All":
            default:
                return true;
        }
    });

    return (
        <main className={classes.main}>
            <div className={classes.header}>
                <h2 className={classes.title}>Extensions List</h2>
                <Filter onChange={handleFilterChange}/>
            </div>
            <ExtensionsList extensions={filteredExtensions} setExtensions={setExtensions}/>
        </main>
    );
};

export default MainContainer;