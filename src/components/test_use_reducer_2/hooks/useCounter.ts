import { useReducer } from 'react';

import { createSlice } from '@reduxjs/toolkit';

interface ConterState {
  count: number;
}

const initialState: ConterState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

const { increment, decrement } = counterSlice.actions;

export const useCounter = () => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  return {
    state,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
