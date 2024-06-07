export const CounterActions = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
} as const;

type ValueOf<T> = T[keyof T];

export interface CounterAction {
  type: ValueOf<typeof CounterActions>;
  payload?: unknown;
  error?: string;
  meta?: string;
}

export const increment = (): CounterAction => ({
  type: CounterActions.INCREMENT,
});

export const decrement = (): CounterAction => ({
  type: CounterActions.DECREMENT,
});
