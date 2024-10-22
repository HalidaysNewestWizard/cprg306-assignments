import React from "react";

const Items = ({ name, quantity, category }) => {
  return (
    <div className="  sm:h-25 sm:w-60 font-extrabold  text-xl  sm:p-5 sm:m-5 md:p-5 md:m-10 text-black bg-slate-600/75 rounded-lg border-4 border-white/75">
      <h2 className="font-serif">{name}</h2>
      <p className="font-mono">Quantity: {quantity}</p>
      <p className="font-sans">Category: {category}</p>
    </div>
  );
};

export default Items;
