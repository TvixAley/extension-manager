import React, { useRef } from 'react';
import ExtensionCard from "../ExtensionCard/ExtensionCard.jsx";
import classes from './ExtensionsList.module.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ExtensionsList = ({ extensions, setExtensions }) => {
    const setActive = (id) => {
        setExtensions((prev) =>
            prev.map((ext) =>
                ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
            )
        );
    };

    const removeFromList = (id) => {
        setExtensions((prev) =>
            prev.filter((ext) => ext.id !== id)
        );
    };

    const refs = useRef({});

    return (
        <TransitionGroup component="ul" className={classes.list}>
            {extensions.map((extension) => {
                if (!refs.current[extension.id]) {
                    refs.current[extension.id] = React.createRef();
                }

                return (
                    <CSSTransition
                        key={extension.id}
                        timeout={300}
                        unmountOnExit
                        classNames={{
                            enter: classes.enter,
                            enterActive: classes.enterActive,
                            exit: classes.exit,
                            exitActive: classes.exitActive,
                        }}
                        nodeRef={refs.current[extension.id]}
                    >
                        <li ref={refs.current[extension.id]}>
                            <ExtensionCard
                                extension={extension}
                                setActive={() => setActive(extension.id)}
                                remove={() => removeFromList(extension.id)}
                            />
                        </li>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
};

export default ExtensionsList;
