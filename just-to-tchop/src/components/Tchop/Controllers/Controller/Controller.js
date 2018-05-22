import React from 'react';

import classes from './Controller.css';

const controller = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}> {props.label} </div>
            <button className={classes.Less} onClick={props.remove} disabled={props.disable}> Less </button>
            <button className={classes.More} onClick={props.add}> More </button>
        </div>
    );
}

export default controller;