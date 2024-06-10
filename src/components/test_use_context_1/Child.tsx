import { FC, useContext } from 'react';

import { ParentContext } from './Parent';

const Child: FC = () => {
  // 2. Contextの取得
  const value = useContext(ParentContext);

  return (
    <>
      <h1>Child</h1>
      <p>value is {value}</p>
    </>
  );
};

export default Child;
