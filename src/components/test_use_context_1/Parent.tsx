import { FC, createContext } from 'react';

import Child from './Child';

// 1. contextの作成
export const ParentContext = createContext('context-value');

const Parent: FC = () => {
  return (
    <>
      <h1>Parent</h1>
      <Child />
    </>
  );
};

export default Parent;
