import { useEffect, useState } from 'react';

const FirstClosure = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log('counter', counter);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  );
};

export default FirstClosure;
