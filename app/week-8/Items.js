import React from 'react';

const Items = ({ name, quantity, category, onSelect }) => {
  return (
    <div
      className='sm:h-25 sm:w-60 font-extrabold text-xl sm:p-5 m-2 md:p-5
       text-black bg-slate-600/75 rounded-lg border-4 border-white/75 hover:bg-pink-500'
      onClick={onSelect}>
      <h2 className='font-serif'>{name}</h2>
      <p className='font-mono'>Quantity: {quantity}</p>
      <p className='font-sans'>Category: {category}</p>
    </div>
  );
};

export default Items;
