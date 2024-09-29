/*(()=> function())(); ???? ask Aaron for a better understanding of this notation  */
"use client";
import {useState} from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    //count is the current value of the state 
    // setCount is a function that updates the state
    
    
    const increment = () =>  setCount(count + 1);
    //
    //never do this to increment count  this will change the count variable 
    // const increment = () => count ++;
    // when using the && operator, the right side of the operator will only be evaluated if the left side is true
    //  when using the || operator, the right side of the operator will only be evaluated if the left side is false
    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            {count > 10 && <p className="text-3xl text-red-600">Count is greater than 10</p>}
            {count === 3 ? <p className="text-3xl text-green-600">Count is 3</p> : <p className="text-3xl text-blue-600">Count is not 3</p>}
            <button className=" w-36 h-24 border rounded-xl border-dotted bg-red-500 border-green-400  text-center text-3xl" onClick={increment}>Increment</button>
            </div>
    );


};