import { FC, useContext } from 'react';

import { ParentContext } from './Parent';

const ChildSecond: FC = () => {
  // 3. Context Valueの取得
  const [state, setState] = useContext(ParentContext);

  return (
    <>
      <h2>ChildSecond</h2>
      <p>state is {state}</p>
      <button onClick={() => setState((state) => ++state)}>+</button>
    </>
  );
};

export default ChildSecond;
