import { useRef, useState } from 'react';

const SampleUseRefSecond = () => {
  const [count, setCount] = useState(0);
  const refValue = useRef<number>();

  const increment = () => {
    setCount((count) => ++count);
    refValue.current = count;
  };

  const output = () => {
    console.log(refValue.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={output}>output</button>
    </>
  );
};

export default SampleUseRefSecond;
