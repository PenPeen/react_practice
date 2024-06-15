import { useState } from 'react';

import Children from './Children';

const Parent: React.FC = () => {
  console.log('render Parent');

  const [state, setState] = useState(0);

  // NOTE: 親コンポーネントが更新されるとこコンポーネントも更新される
  const countUp = () => setState((c) => c + 1);

  return (
    <>
      <h4>Parent {state}</h4>
      <button onClick={countUp}>update</button>
      <Children />
    </>
  );
};

export default Parent;
