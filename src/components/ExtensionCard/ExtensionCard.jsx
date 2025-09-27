import React from 'react';
import Button from "../../UI/Button/Button.jsx";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch.jsx";
import classes from './ExtensionCard.module.css'

const ExtensionCard = ({extension, setActive, remove}) => {
    return (
        <div className={classes.card}>
            <div className={classes.info}>
                <img className={classes.icon} src={extension.logo} alt="" width={60} height={60}/>
                <div className={classes.details}>
                    <div className={classes.name}>{extension.name}</div>
                    <p className={classes.description}>{extension.description}</p>
                </div>
            </div>
            <div className={classes.actions}>
                <Button type={'button'} onClick={remove}>Remove</Button>
                <ToggleSwitch checked={extension.isActive} onChange={setActive} disabled={false}/>
            </div>
        </div>
    );
};

export default ExtensionCard;