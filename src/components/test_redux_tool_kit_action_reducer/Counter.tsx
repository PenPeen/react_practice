import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './stores/counter/actions';
import { CounterState } from './stores/counter/reducer';

const Counter: React.FC = () => {
  const count = useSelector<CounterState, number>((state) => {
    return state.count;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>count: is {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
};

export default Counter;
