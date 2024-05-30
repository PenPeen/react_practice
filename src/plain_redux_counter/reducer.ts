import { Reducer } from 'redux';

import { CounterAction } from './action';

export const initialState = { count: 0 };

export interface CounterState {
  count: number;
}

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'counter/decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      console.log(`Sorry, we are out of ${action.type}.`);
      return state;
  }
};
