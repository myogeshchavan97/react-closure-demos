import { useState } from 'react';

const SecondClosure = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={increment}>Increment Counter</button>
    </div>
  );
};

export default SecondClosure;
