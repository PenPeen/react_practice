import { FC, useContext } from 'react';

import { ParentContext } from './context/ParentProvider';

const ChildFirst: FC = () => {
  const { state, increment, decrement } = useContext(ParentContext);

  return (
    <>
      <h3>ChildFirst</h3>
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

export default ChildFirst;
