import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Tchop from '../../components/Tchop/Tchop';

class TchopBuilder extends Component {
    state={
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 2,
            bacon:3,
        }
    }

    render(){
        return(
            <Aux>
                <Tchop ingredients={this.state.ingredients} />
                <div> Builder Control</div>
            </Aux>
        );
    }
}

export default TchopBuilder;