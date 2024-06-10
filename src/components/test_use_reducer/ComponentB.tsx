import React from 'react';

import { useCounter } from './hooks/useCounter';

const ComponentB: React.FC = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <div>
      <h1>ComponentB</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default ComponentB;
