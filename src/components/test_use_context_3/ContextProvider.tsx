import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useReducer,
} from 'react';

import { createSlice } from '@reduxjs/toolkit';

// 1. contextの作成
type HogeDispacher = () => void;
type StateContextType = [string];
type DispacherContextType = [HogeDispacher, HogeDispacher];
export const StateContext = createContext<StateContextType>({} as never);
export const DispacherContext = createContext<DispacherContextType>(
  {} as never,
);

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
  const handleHogeUp = useCallback(() => dispatch(hogeUp()), []);
  const handleHogeDown = useCallback(() => dispatch(hogeDown()), []);

  const handleHogeEvent = useMemo(
    (): DispacherContextType => [handleHogeUp, handleHogeDown],
    [handleHogeUp, handleHogeDown],
  );

  return (
    // 2. Provider valueに、状態を更新関数を指定
    <StateContext.Provider value={[state.value]}>
      <DispacherContext.Provider value={handleHogeEvent}>
        {children}
      </DispacherContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
