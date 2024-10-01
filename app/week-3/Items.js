import React from 'react';


const Items = ({ name, quantity, category }) => {
    return (
        <div className=" h-45 w-80 font-extrabold  text-2xl  p-5 m-10 text-black bg-slate-600 rounded-lg border-4 border-white">
            <h2 className='font-serif'>{name}</h2>
            <p className='font-mono'>Quantity: {quantity}</p>
            <p className='font-sans'>Category: {category}</p>
        </div>
    );
};



export default Items;