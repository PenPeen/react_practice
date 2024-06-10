import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

// 1. contextの作成
type ParentContextType = [number, Dispatch<SetStateAction<number>>];
export const ParentContext = createContext<ParentContextType>({} as never);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    // 2. Provider valueに、状態を更新関数を指定
    <ParentContext.Provider value={[state, setState]}>
      {children}
    </ParentContext.Provider>
  );
};

export default ContextProvider;
