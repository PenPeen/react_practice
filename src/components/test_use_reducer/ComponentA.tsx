import React from 'react';

import { useCounter } from './hooks/useCounter';

const ComponentA: React.FC = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <div>
      <h1>ComponentA</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default ComponentA;
