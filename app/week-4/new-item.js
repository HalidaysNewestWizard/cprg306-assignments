"use client ";
import { useState } from "react";
import Counter from "./counter";


export default function NewItem() {
const [quantity, setQuantity] = useState(1);


    return (

     <div className="flex   rounded-lg  my-10 justify-center w-screen ">
      <div className=" flex w-48 rounded-md p-4 bg-blue-300/25  justify-around" >
      
        {/* <h1 className="text-4xl">Item</h1> */}
      
        {/* {quantity > 10 && <p className="text-3xl text-red-600">Quantity is greater than 10</p>} */}
      
       <Counter/>
       
        
      
        </div>
        </div>
    );
}
