import React from 'react';
import './Card.css'
const Card = (propObj) =>
{
 const classes = 'card ' + propObj.className;
 return <div className={classes}>{propObj.children}</div>
}

export default Card;