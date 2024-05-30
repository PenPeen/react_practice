const counterActions = {
  increment: 'counter/increment',
  decrement: 'counter/decrement',
} as const;

type ValueOf<T> = T[keyof T];

export type CounterAction = {
  type: ValueOf<typeof counterActions>;
  payload?: number;
};

export const increment = (): CounterAction => ({
  type: counterActions.increment,
});

export const decrement = (): CounterAction => ({
  type: counterActions.decrement,
});
