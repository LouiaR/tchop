import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Tchop from '../../components/Tchop/Tchop';
import Controllers from '../../components/Tchop/Controllers/Controllers';

const Price_Unit = [
    { salad: .5},
    {bacon: .64},
    { cheese: .75},
    {meat: .98}
]
class TchopBuilder extends Component {
    state={
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon:0,
        },
    }

    addIngredients = (type) => {
        const quantityOfIngredients = this.state.ingredients[type] + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = quantityOfIngredients;
        this.setState({
            ingredients:updateIngredients,
        })
    }

    removeIngredients = (type) => {
        const quantityOfIngredients = this.state.ingredients[type] - 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = quantityOfIngredients;
        if(quantityOfIngredients < 0) {
            return
        }
        this.setState({
            ingredients:updateIngredients,
        }) 
    }

    render(){
        const disabled = {...this.state.ingredients};
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        return(
            <Aux>
                <Tchop ingredients={this.state.ingredients} />
                <Controllers 
                add={this.addIngredients}
                remove={this.removeIngredients}
                disable={disabled}
                />
            </Aux>
        );
    }
}

export default TchopBuilder;