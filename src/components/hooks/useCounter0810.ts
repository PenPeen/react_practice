import { useState } from 'react';

const useCounter0810 = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount((count) => ++count);

  return {
    count,
    countUp,
  };
};

export default useCounter0810;
