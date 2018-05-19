import React from 'react';
import Aux from '../../hoc/aux';

import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div> top nav drawer </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;