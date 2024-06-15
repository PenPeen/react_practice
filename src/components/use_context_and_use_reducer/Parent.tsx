import { FC, createContext } from 'react';

import ChildFirst from './ChildFirst';
import ChildSecond from './ChildSecond';
import { ConterState, useCounter } from './hooks/useCounter';

interface ParentContext {
  state: ConterState;
  increment: () => void;
  decrement: () => void;
}

export const ParentContext = createContext<ParentContext>({} as never);

const Parent: FC = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <ParentContext.Provider value={{ state, increment, decrement }}>
        <h1>Parent</h1>
        <ChildFirst />
        <ChildSecond />
      </ParentContext.Provider>
    </>
  );
};

export default Parent;
