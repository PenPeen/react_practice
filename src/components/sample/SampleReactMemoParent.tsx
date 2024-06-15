import { useState } from 'react';

import SampleReactMemo from './SampleReactMemo';

const SampleReactMemoParent: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => ++count);

  return (
    <>
      <SampleReactMemo value={count} />
      <div>{count}</div>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default SampleReactMemoParent;
