import { FC, PropsWithChildren, createContext, useReducer } from 'react';

import { createSlice } from '@reduxjs/toolkit';

// 1. contextの作成
type ParentContextType = [string, () => void, () => void];
export const ParentContext = createContext<ParentContextType>({} as never);

type HogeState = { value: string };
const initialState: HogeState = { value: 'hoge' };

const hogeSlice = createSlice({
  name: 'hoge',
  initialState,
  reducers: {
    hogeUp(state) {
      state.value += '↑';
    },
    hogeDown(state) {
      state.value += '↓';
    },
  },
});

const { actions, reducer } = hogeSlice;
const { hogeUp, hogeDown } = actions;

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleHogeUp = () => dispatch(hogeUp());
  const handleHogeDown = () => dispatch(hogeDown());

  return (
    // 2. Provider valueに、状態を更新関数を指定
    <ParentContext.Provider value={[state.value, handleHogeUp, handleHogeDown]}>
      {children}
    </ParentContext.Provider>
  );
};

export default ContextProvider;
