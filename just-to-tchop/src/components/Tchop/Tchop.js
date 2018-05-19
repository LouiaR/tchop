import React from 'react';
import Ingredients from './Ingredients/Ingredients';

import classes from './Tchop.css';

const tchop = (props) => {
    const ingredients = props.ingredients;
   let menu = Object.keys(ingredients)
        .map(ingre => {return [...Array(ingredients[ingre])]
        .map((_, i) => <Ingredients key={ingre+i} type={ingre} />
    )})
    const menuLength = [].concat.apply([], menu).length;
    console.log(menuLength)
    if (menuLength === 0){
         menu = <p> Please add your favorite flavours! </p>;
    }   
    return (
        <div className={classes.Burger}>
            <Ingredients type='bread-top'/>
            {menu}
            <Ingredients type='bread-bottom'/>
        </div>
    );
}

export default tchop;