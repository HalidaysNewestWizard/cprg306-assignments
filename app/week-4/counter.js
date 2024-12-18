/*(()=> function())(); ???? ask Aaron for a better understanding of this notation  */
"use client";
import {useState} from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    //count is the current value of the state 
    // setCount is a function that updates the state
    
    const increment = () => setCount(count + 1);
    const decrement = () =>{
     if(count>=1){ setCount(count - 1)}};
    
    //never do this to increment count  this will change the count variable 
    // const increment = () => count ++;
    // when using the && operator, the right side of the operator will only be evaluated if the left side is true
    //  when using the || operator, the right side of the operator will only be evaluated if the left side is false
    return (
        <div className=" flex flex-row w-auto ">
        
            
           {/* {count > 10 && <p className="text-3xl text-red-600">Count is greater than 10</p>}
            {count === 3 ? <p className="text-3xl text-green-600">Count is 3</p> : <p className="text-3xl text-blue-600">Count is not 3</p>}*/}
            <button className="w-12 h-10 mx-1 rounded-3xl  bg-blue-500  border-2  border-white-400  text-2xl" onClick={decrement}>-</button>  
            <button className="w-12 h-10 mx-2 rounded-3xl   bg-blue-500  border-2 border-white-400  text-xl" onClick={increment}>+</button>
           <p className="m-2"> {count}</p>
            </div>
    );


};