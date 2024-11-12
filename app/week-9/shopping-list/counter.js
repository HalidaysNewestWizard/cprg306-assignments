/*(()=> function())(); ???? ask Aaron for a better understanding of this notation  */

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //const [person, setPerson] = useState({ name: "John", age: 25 });
  //count is the current value of the state
  // setCount is a function that updates the state

  function increment() {
    // setPerson({ ...person, age: person.age + 1 });

    setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    //this notation is used so that multiple changes to the count are made at one time
    // setCount((prevCount) => prevCount + 1);
  }
  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else if (count === 0) {
      alert("Count is 0 Stop Pressing the button");
    }
  };

  //never do this to increment count  this will change the count variable
  // const increment = () => count ++;
  // when using the && operator, the right side of the operator will only be evaluated if the left side is true
  //  when using the || operator, the right side of the operator will only be evaluated if the left side is false
  return (
    <div className=" flex flex-row w-36 h-16 p-3  bg-cyan-300/25 rounded-lg  ">
      {/* {count > 10 && <p className="text-3xl text-red-600">Count is greater than 10</p>}
            {count === 3 ? <p className="text-3xl text-green-600">Count is 3</p> : <p className="text-3xl text-blue-600">Count is not 3</p>}*/}
      <button
        className="w-12 h-10 mx-1  rounded-3xl  bg-blue-500  border-2  border-white-400  text-2xl"
        onClick={decrement}
      >
        -
      </button>
      <button
        className="w-12 h-10 mx-2 rounded-3xl   bg-blue-500  border-2 border-white-400  text-xl"
        onClick={increment}
      >
        +
      </button>
      <p className="m-1"> {count}</p>
    </div>
  );
}
