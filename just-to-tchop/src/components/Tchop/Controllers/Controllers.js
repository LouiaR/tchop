import React from 'react';
import Controller from './Controller/Controller';

import classes from './Controllers.css';
const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const controllers = (props) => (
    <div className={classes.BuildControls}>
        {control.map(ctrl => (
            <Controller 
            key={ctrl.label} 
            label={ctrl.label}
            add={() => props.add(ctrl.type)} 
            remove={() => props.remove(ctrl.type)} 
            disable={props.disable[ctrl.type]}
            />
        ))}
    </div>
);

export default controllers;