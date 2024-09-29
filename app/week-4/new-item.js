"use client ";
import { useState } from "react";


export default function NewItem() {
const [quantity, setQuantity] = useState(1);
 const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);  
    return (
        <div>
        <h1 className="text-4xl">Item</h1>
        <p className="text-lg">Current quantity: {quantity}</p>
        {quantity > 10 && <p className="text-3xl text-red-600">Quantity is greater than 10</p>}
      
        <button className="w-16 h-12 border rounded-xl border-dotted bg-red-500 border-green-400 text-center text-3xl" onClick={increment}>+</button>
        <button className="w-16 h-12 border rounded-xl border-dotted bg-red-500 border-green-400 text-center text-3xl" onClick={decrement}>-</button>
        </div>
    );
}
