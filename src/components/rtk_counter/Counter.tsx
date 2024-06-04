// import { useDispatch, useSelector } from 'react-redux';

// import { decrement, increment } from './action';
// import { CounterState } from './reducer';

// const Counter: React.FC = () => {
//   const counter = useSelector<CounterState, number>((state) => state.count);
//   const dispatch = useDispatch();

//   const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     dispatch(increment());
//   };

//   const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     dispatch(decrement());
//   };

//   return (
//     <>
//       <div>count: {counter}</div>
//       <div>
//         <button onClick={handleIncrement}>increment</button>
//       </div>
//       <div>
//         <button onClick={handleDecrement}>decrement</button>
//       </div>
//     </>
//   );
// };

// export default Counter;
