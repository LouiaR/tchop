import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Tchop from '../../components/Tchop/Tchop';
import Controllers from '../../components/Tchop/Controllers/Controllers';

const Price_Unit = {
    salad: 0.25,
    bacon: .64,
    cheese: .75,
    meat: .98
}
class TchopBuilder extends Component {
    state={
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon:0,
        },
        price: 0.89,
        order: true,
    }

    addIngredients = (type) => {
        const quantityOfIngredients = this.state.ingredients[type] + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = quantityOfIngredients;
        const total = this.state.price + Price_Unit[type]
        this.totalQuantityOfIngredients(updateIngredients)        
        this.setState({
            ingredients:updateIngredients,
            price: total,
        })
    }

    removeIngredients = (type) => {
        const ingre = this.state.ingredients[type]
        if(ingre <= 0) {
            return
        }
        const quantityOfIngredients = this.state.ingredients[type] - 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = quantityOfIngredients;
        const total = this.state.price - Price_Unit[type]
        this.setState({
            ingredients:updateIngredients,
            price: total,
        });
        this.totalQuantityOfIngredients(updateIngredients)
        
    }

    totalQuantityOfIngredients = (ingredients) => {
     const x =  Object.keys(ingredients).map(ing => {
           return ingredients[ing]
       })
       .reduce((a, b) => a + b)
       this.setState({
           order: x <= 0,
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
                price={this.state.price}
                update={this.state.order} />
            </Aux>
        );
    }
}

export default TchopBuilder;