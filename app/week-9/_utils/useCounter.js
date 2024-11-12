import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else if (count === 0) {
      alert('Count is 0 Stop Pressing the button');

      return {
        count,
        increment,
        decrement,
      };
    }
  };
}
