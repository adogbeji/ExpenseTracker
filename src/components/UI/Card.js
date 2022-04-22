import React from 'react';
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;  // Any values for className added to the string
    return <div className={classes}>{props.children}</div>;
}

export default Card;