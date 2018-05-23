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
        <p> {props.price.toFixed(2)} </p>
        {control.map(ctrl => (
            <Controller 
            key={ctrl.label} 
            label={ctrl.label}
            add={() => props.add(ctrl.type)} 
            remove={() => props.remove(ctrl.type)} 
            disable={props.disable[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={props.update}> Order Now </button>
    </div>
);

export default controllers;