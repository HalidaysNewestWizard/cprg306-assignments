import React from 'react';


const Items = ({ name, quantity, category }) => {
    return (
        <div className="item">
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
};



export default Items;