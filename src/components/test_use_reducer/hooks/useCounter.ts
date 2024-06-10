import { useReducer } from 'react';

import { createSlice } from '@reduxjs/toolkit/react';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

// useSelector と useDispatchが useReducerに置き換わる
export const useCounter = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    // (count: number): CounterState => ({ count }),
  );

  return {
    state,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export { reducer };
