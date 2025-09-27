import React, {useId} from 'react';
import classes from './ToggleSwitch.module.css'

const ToggleSwitch = ({checked, onChange, disabled}) => {
    const id = useId();

    return (
        <>
            <input id={id}
                   className={classes.toggleSwitchInput + ' visually-hidden'}
                   checked={checked}
                   disabled={disabled}
                   type='checkbox'
                   onChange={onChange}
                   aria-label='Toggle extension'
            />
            <label htmlFor={id} className={classes.toggleSwitchLabel}/>
        </>
    );
};

export default ToggleSwitch;