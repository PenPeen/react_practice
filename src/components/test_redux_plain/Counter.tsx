import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './action';
import { CounterState } from './reducer';

const Counter: React.FC = () => {
  const count = useSelector<CounterState, number>((state) => {
    return state.count;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>count: is {count}</div>
      <div>
        {/* @ts-expect-error: increment action type matched */}
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <div>
        {/* @ts-expect-error: increment action type matched */}
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
};

export default Counter;
