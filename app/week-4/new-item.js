"use client ";
import { useState } from "react";


export default function NewItem() {
const [quantity, setQuantity] = useState(1);
 const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);  
    return (

     <div className="flex  my-10 justify-center w-screen">
        <div className=" flex h-10 w-96 justify-center justify-items-center">
        {/* <h1 className="text-4xl">Item</h1> */}
      
        {/* {quantity > 10 && <p className="text-3xl text-red-600">Quantity is greater than 10</p>} */}
      
       
        <button className="w-10 h-10 mx-1 rounded-2xl  bg-blue-500  border-2  border-white-400  text-3xl" onClick={decrement}>-</button>  
         <button className="w-10 h-10 mx-2 rounded-2xl   bg-blue-500  border-2 border-white-400  text-2xl" onClick={increment}>+</button>
        <p className="text-lg my-2 mx-1"> {quantity}</p> 
        </div>
        </div>
    );
}
