import { useState } from 'react';

const ThirdClosure = () => {
  const [counter, setCounter] = useState(0);

  const startCountdown = () => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div>
      <div>
        Start countdown from value:
        <select onChange={(event) => setCounter(event.target.value)}>
          <option value=''>Select Value</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>
      <button onClick={startCountdown}>Start Countdown</button>
      <div>Counter: {counter}</div>
    </div>
  );
};

export default ThirdClosure;
