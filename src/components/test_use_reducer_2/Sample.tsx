import { FC } from 'react';

import { useCounter } from './hooks/useCounter';

const Sample: FC = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <h1>Sample</h1>
      <div>
        <div>{state.count}</div>
        <div>
          <button onClick={increment}>+</button>
        </div>
        <div>
          <button onClick={decrement}>+</button>
        </div>
      </div>
    </>
  );
};

export default Sample;
