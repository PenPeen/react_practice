import { createReducer } from '@reduxjs/toolkit';

import { increment, decrement } from './actions.ts';

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(decrement, (state) => {
      if (state.count > 0) {
        state.count--;
      }
    })
    .addCase(increment, (state) => {
      state.count++;
    });
});

export default counterReducer;
