import { Reducer } from 'redux';

import { CounterAction, CounterActions } from './action';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 1 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action: CounterAction,
) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    // defaultの定義がないとエラーになるので注意
    default:
      return state;
  }
};
