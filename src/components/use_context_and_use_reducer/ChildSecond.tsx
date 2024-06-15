import { FC, useContext } from 'react';

import { ParentContext } from './context/ParentProvider';

const ChildSecond: FC = () => {
  const { state, increment, decrement } = useContext(ParentContext);

  return (
    <>
      <h3>ChildSecond</h3>
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

export default ChildSecond;
