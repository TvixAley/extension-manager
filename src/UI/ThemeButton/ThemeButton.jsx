import React, {useEffect, useState} from 'react';
import classes from './ThemeButton.module.css'
import MoonIcon from '../../assets/icons/icon-moon.svg'
import SunIcon from '../../assets/icons/icon-sun.svg'

const ThemeButton = ({children, ...props}) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || 'light';
    })

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <button type={'button'}
                {...props}
                className={classes.themeButton}
                onClick={ () => {setTheme((theme === 'dark') ? 'light' : 'dark') }}
        >
            <img src={theme === 'dark' ? SunIcon : MoonIcon} alt={""} width={22} height={22}/>
        </button>
    );
};

export default ThemeButton;