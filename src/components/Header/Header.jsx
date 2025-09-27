import React from 'react';
import EMLogo from '/favicon.png'
import ThemeButton from "../../UI/ThemeButton/ThemeButton.jsx";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={EMLogo} alt={""} width={40} height={40}/>
                <h2 className={classes.title}>Extensions</h2>
            </div>
            <ThemeButton/>
        </header>
    );
};

export default Header;