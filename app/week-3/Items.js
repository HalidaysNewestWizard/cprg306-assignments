import React from 'react';


const Items = ({ name, quantity, category }) => {
    return (
        <div className=" font-extrabold  w-auto text-2xl text-orange-600 m-5 text-pretty border-double border-8 border-emerald-900  bg-indigo-300">
            <h2 className='font-serif'>{name}</h2>
            <p className='font-mono'>Quantity: {quantity}</p>
            <p className='font-sans'>Category: {category}</p>
        </div>
    );
};



export default Items;