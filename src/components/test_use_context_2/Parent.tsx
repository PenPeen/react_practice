import { Dispatch, FC, SetStateAction, createContext, useState } from 'react';

import Child from './Child';
import ChildSecond from './ChildSecond';

// 1. contextの作成
type ParentContextType = [number, Dispatch<SetStateAction<number>>];
export const ParentContext = createContext<ParentContextType>({} as never);

const Parent: FC = () => {
  const [state, setState] = useState(0);

  return (
    // 2. Provider valueに、状態を更新関数を指定
    <ParentContext.Provider value={[state, setState]}>
      <h1>Parent</h1>
      <Child />
      <ChildSecond />
    </ParentContext.Provider>
  );
};

export default Parent;
