import { FC, PropsWithChildren, createContext } from 'react';

import { ConterState, useCounter } from '../hooks/useCounter';

interface ContextValue {
  state: ConterState;
  increment: () => void;
  decrement: () => void;
}

export const ParentContext = createContext<ContextValue>({} as never);

const ParentProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <ParentContext.Provider value={{ state, increment, decrement }}>
        {children}
      </ParentContext.Provider>
    </>
  );
};

export default ParentProvider;
