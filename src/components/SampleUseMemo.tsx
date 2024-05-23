import { useMemo, useRef, useState } from 'react';

import PropTypes from 'prop-types';

const isValuePrime = (value: number): boolean => {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const SampleUseMemo: React.FC<{ value: number }> = ({ value }) => {
  // メモ化
  const isPrime = useMemo(() => {
    console.log('called, isPrime');

    return isValuePrime(value);
  }, [value]);

  const sampleObj = useMemo(() => ({ value: 'hoge' }), [value]);
  const objRef = useRef(sampleObj);

  // メモ化しない場合はfalse
  if (objRef.current) {
    console.log(sampleObj === objRef.current);
  }

  // メモ化しない場合
  // const isPrime = () => {
  //   console.log('called, isPrime');

  //   return isValuePrime(value);
  // };

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>isPrime: {isPrime.toString()}</div>
        <div>count {count}</div>
        <div>
          <button onClick={() => setCount((count) => ++count)}>
            increment
          </button>
        </div>
      </div>
    </>
  );
};

SampleUseMemo.propTypes = {
  value: PropTypes.number.isRequired,
};

export default SampleUseMemo;
